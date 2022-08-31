import express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { QueryTypes } from "sequelize";
import {
  vendorsRegisterSchema,
  vendorLoginSchema,
  generateToken,
  createMenuSchema,
  options,
} from "../utils/utils";
import { VendorsInstance } from "../models/vendors";
import { MenuInstance } from "../models/menu";
import bcrypt from "bcryptjs";
import sequelize from "sequelize/types/sequelize";

export async function AddFoodToMenu(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  const id = uuidv4();
  try {
    const vendorId = req.cookies.id;
    const verified = req.user;
    const validationResult = createMenuSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }
    const record = await MenuInstance.create({
      id: id,
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      premium: req.body.premium,
      price: req.body.price,
      dayServed: req.body.dayServed,
      vendorId: req.body.vendorId,
    });

    res.status(201).json({
      msg: "You have successfully added a food to the menu",
      record: record,
    });
  } catch (err) {
    res.status(500).json({
      msg: "failed to create",
      route: "/addfoodtomenu",
    });
  }
}

export async function getAllMenu(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    //const userId = req.cookies.id;
    const vendorId = req.params.id;
    const record = (await VendorsInstance.findOne({
      where: { id: vendorId },
      include: [{ model: MenuInstance, as: "menu" }],
    })) as unknown as { [key: string]: string };

    res.status(200).json({
      record: record,
    });
  } catch (err) {
    res.status(500).json({
      err: console.log(err),
      msg: "failed to get record",
      route: "/login",
    });
  }
}

export async function RegisterVendor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = uuidv4();
  try {
    const validationResult = vendorsRegisterSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }
    const duplicatEmail = await VendorsInstance.findOne({
      where: { email: req.body.email },
    });
    if (duplicatEmail) {
      return res.status(409).json({
        msg: "Email is used, please enter another email",
      });
    }

    const duplicatePhone = await VendorsInstance.findOne({
      where: { phoneNumber: req.body.phoneNumber },
    });

    if (duplicatePhone) {
      return res.status(409).json({
        msg: "Phone number is used",
      });
    }
    const passwordHash = await bcrypt.hash(req.body.password, 8);
    const record = await VendorsInstance.create({
      id: id,
      name: req.body.name,
      ownedBy: req.body.ownedBy,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: passwordHash,
      verified: false,
    });
    res.status(201).json({
      msg: "You have successfully registered",
      record: record,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "failed to register",
      route: "/register",
    });
  }
}

export async function LoginVendor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = uuidv4();
  try {
    const validationResult = vendorLoginSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }
    const Vendor = (await VendorsInstance.findOne({
      where: { email: req.body.email },
    })) as unknown as { [key: string]: string };

    const { id } = Vendor;
    const token = generateToken({ id });
    const validVendor = await bcrypt.compare(
      req.body.password,
      Vendor.password
    );

    if (!validVendor) {
      res.status(401).json({
        message: "Password does not match",
      });
    }

    if (validVendor) {
      res.cookie("authorization", token, {
        httpOnly: true,

        maxAge: 1000 * 60 * 60 * 24,
      });
      res.cookie("id", id, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.status(201).json({
        message: "Successfully logged in",
        token,
        Vendor,
      });
    }
  } catch (err) {
    console.log(err);

    res.status(500).json({
      msg: "failed to login",
      route: "/login",
    });
  }
}
