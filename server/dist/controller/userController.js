"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.MakeOrders = exports.getAllMenu = exports.LoginUser = exports.RegisterUser = void 0;
const uuid_1 = require("uuid");
const utils_1 = require("../utils/utils");
const users_1 = require("../models/users");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const menu_1 = require("../models/menu");
const orders_1 = require("../models/orders");
async function RegisterUser(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.registerSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const duplicatEmail = await users_1.UserInstance.findOne({
            where: { email: req.body.email },
        });
        if (duplicatEmail) {
            return res.status(409).json({
                msg: "Email is used, please enter another email",
            });
        }
        const duplicatePhone = await users_1.UserInstance.findOne({
            where: { phoneNumber: req.body.phoneNumber },
        });
        if (duplicatePhone) {
            return res.status(409).json({
                msg: "Phone number is used",
            });
        }
        const passwordHash = await bcryptjs_1.default.hash(req.body.password, 8);
        const record = await users_1.UserInstance.create({
            id: id,
            fullName: req.body.fullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: passwordHash,
        });
        res.status(201).json({
            msg: "You have successfully registered",
            record: record,
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "failed to register",
            route: "/register",
        });
    }
}
exports.RegisterUser = RegisterUser;
async function LoginUser(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.loginSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const User = (await users_1.UserInstance.findOne({
            where: { email: req.body.email },
        }));
        const { id } = User;
        const token = (0, utils_1.generateToken)({ id });
        const validUser = await bcryptjs_1.default.compare(req.body.password, User.password);
        if (!validUser) {
            res.status(401).json({
                message: "Password do not match",
            });
        }
        if (validUser) {
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
                User,
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "failed to login",
            route: "/login",
        });
    }
}
exports.LoginUser = LoginUser;
async function getAllMenu(req, res, next) {
    try {
        const record = await menu_1.MenuInstance.findAll({});
        res.status(200).json({
            record: record,
        });
    }
    catch (err) {
        res.status(500).json({
            err: console.log(err),
            msg: "failed to get record",
            route: "/login",
        });
    }
}
exports.getAllMenu = getAllMenu;
async function MakeOrders(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const userId = req.cookies.id;
        const verified = req.user;
        const validationResult = utils_1.makeOrderSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const record = await orders_1.OrderInstance.create({
            id: id,
            userId: req.body.userId,
            foodId: req.body.foodId,
            vendorId: req.body.vendorId,
            comments: req.body.comments,
            orderDate: new Date(Date.now()),
        });
        res.status(201).json({
            msg: "You have successfully added a food to the menu",
            record: record,
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "failed to create",
            route: "/addfoodtomenu",
        });
    }
}
exports.MakeOrders = MakeOrders;
async function getOrders(req, res, next) {
    try {
        //const userId = req.cookies.id;
        const userId = req.params.id;
        const record = (await users_1.UserInstance.findOne({
            where: { id: userId },
            include: [{ model: orders_1.OrderInstance, as: "orders" }],
        }));
        res.status(200).json({
            record: record,
        });
    }
    catch (err) {
        res.status(500).json({
            err: console.log(err),
            msg: "failed to get record",
            route: "/login",
        });
    }
}
exports.getOrders = getOrders;
