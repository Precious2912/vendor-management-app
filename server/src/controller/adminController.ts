import express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  adminRegisterSchema,
  adminLoginSchema,
  options,
  generateToken,
  verifyVendorSchema,
} from "../utils/utils";
import { AdminInstance } from "../models/admin";
import bcrypt from "bcryptjs";
import { VendorsInstance } from "../models/vendors";

export async function RegisterAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = uuidv4();
  try {
    const validationResult = adminRegisterSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }
    const duplicatEmail = await AdminInstance.findOne({
      where: { email: req.body.email },
    });
    if (duplicatEmail) {
      return res.status(409).json({
        msg: "Email is used, please enter another email",
      });
    }

    const duplicatePhone = await AdminInstance.findOne({
      where: { phoneNumber: req.body.phoneNumber },
    });

    if (duplicatePhone) {
      return res.status(409).json({
        msg: "Phone number is used",
      });
    }
    const passwordHash = await bcrypt.hash(req.body.password, 8);
    const record = await AdminInstance.create({
      id: id,
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: passwordHash,
    });
    res.status(200).json({
      msg: "You have successfully registered",
      record: record,
    });
  } catch (err) {
    res.status(500).json({
      msg: "failed to register",
      route: "/register",
    });
  }
}

export async function LoginAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = uuidv4();
  try {
    const validationResult = adminLoginSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }
    const Admin = (await AdminInstance.findOne({
      where: { email: req.body.email },
    })) as unknown as { [key: string]: string };

    const { id } = Admin;
    const token = generateToken({ id });
    const validAdmin = await bcrypt.compare(req.body.password, Admin.password);

    if (!validAdmin) {
      res.status(401).json({
        message: "Password do not match",
      });
    }

    if (validAdmin) {
      res.cookie("authorization", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.cookie("id", id, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.status(200).json({
        message: "Successfully logged in",
        token,
        Admin,
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

export async function verifyVendor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const { verified } = req.body;
    const validationResult = verifyVendorSchema.validate(req.body, options);
    if (validationResult.error) {
      return res.status(400).json({
        Error: validationResult.error.details[0].message,
      });
    }

    const record = await VendorsInstance.findOne({ where: { id } });
    if (!record) {
      return res.status(404).json({
        Error: "Cannot find existing course",
      });
    }
    const updatedrecord = await record.update({
      verified: verified,
    });
    res.status(200).json({
      message: "You have successfully verified Vendor",
    });
  } catch (error) {
    res.status(500).json({
      msg: "failed to update",
      route: "/verifyvendor/:id",
    });
  }
}

export async function removeVendor(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const record = await VendorsInstance.findOne({ where: { id } });
    if (!record) {
      return res.status(404).json({
        msg: "Cannot find vendor",
      });
    }
    const deletedRecord = await record.destroy();
    res.status(200).json({
      message: "You have successfully removed this vendor",
    });
  } catch (error) {
    res.status(500).json({
      msg: "failed to delete",
      route: "/delete/:id",
    });
  }
}