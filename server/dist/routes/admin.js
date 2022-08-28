"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const adminController_1 = require("../controller/adminController");
/* GET admin listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});
router.post("/register", adminController_1.RegisterAdmin);
router.post("/login", adminController_1.LoginAdmin);
exports.default = router;
