"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAdmin = exports.RegisterAdmin = void 0;
const uuid_1 = require("uuid");
const utils_1 = require("../utils/utils");
const admin_1 = require("../models/admin");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function RegisterAdmin(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.adminRegisterSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const duplicatEmail = await admin_1.AdminInstance.findOne({
            where: { email: req.body.email },
        });
        if (duplicatEmail) {
            return res.status(409).json({
                msg: "Email is used, please enter another email",
            });
        }
        const duplicatePhone = await admin_1.AdminInstance.findOne({
            where: { phoneNumber: req.body.phoneNumber },
        });
        if (duplicatePhone) {
            return res.status(409).json({
                msg: "Phone number is used",
            });
        }
        const passwordHash = await bcryptjs_1.default.hash(req.body.password, 8);
        const record = await admin_1.AdminInstance.create({
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
    }
    catch (err) {
        res.status(500).json({
            msg: "failed to register",
            route: "/register",
        });
    }
}
exports.RegisterAdmin = RegisterAdmin;
async function LoginAdmin(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.adminLoginSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const Admin = (await admin_1.AdminInstance.findOne({
            where: { email: req.body.email },
        }));
        const { id } = Admin;
        const token = (0, utils_1.generateToken)({ id });
        const validAdmin = await bcryptjs_1.default.compare(req.body.password, Admin.password);
        if (!validAdmin) {
            res.status(401).json({
                message: "Password do not match",
            });
        }
        if (validAdmin) {
            res.status(200).json({
                message: "Successfully logged in",
                token,
                Admin,
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
exports.LoginAdmin = LoginAdmin;
