"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginVendor = exports.RegisterVendor = void 0;
const uuid_1 = require("uuid");
const utils_1 = require("../utils/utils");
const vendors_1 = require("../models/vendors");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function RegisterVendor(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.vendorsRegisterSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const duplicatEmail = await vendors_1.VendorsInstance.findOne({
            where: { email: req.body.email },
        });
        if (duplicatEmail) {
            return res.status(409).json({
                msg: "Email is used, please enter another email",
            });
        }
        const duplicatePhone = await vendors_1.VendorsInstance.findOne({
            where: { phoneNumber: req.body.phoneNumber },
        });
        if (duplicatePhone) {
            return res.status(409).json({
                msg: "Phone number is used",
            });
        }
        const passwordHash = await bcryptjs_1.default.hash(req.body.password, 8);
        const record = await vendors_1.VendorsInstance.create({
            id: id,
            name: req.body.name,
            ownedBy: req.body.ownedBy,
            address: req.body.address,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: passwordHash,
            verified: false,
        });
        res.status(200).json({
            msg: "You have successfully registered",
            record: record,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "failed to register",
            route: "/register",
        });
    }
}
exports.RegisterVendor = RegisterVendor;
async function LoginVendor(req, res, next) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = utils_1.vendorLoginSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const Vendor = (await vendors_1.VendorsInstance.findOne({
            where: { email: req.body.email },
        }));
        const { id } = Vendor;
        const token = (0, utils_1.generateToken)({ id });
        const validVendor = await bcryptjs_1.default.compare(req.body.password, Vendor.password);
        if (!validVendor) {
            res.status(401).json({
                message: "Password do not match",
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
            res.status(200).json({
                message: "Successfully logged in",
                token,
                Vendor,
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
exports.LoginVendor = LoginVendor;
