"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const vendorController_1 = require("../controller/vendorController");
/* GET vendors listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});
router.post("/register", vendorController_1.RegisterVendor);
router.post("/login", vendorController_1.LoginVendor);
router.post("/addfood", vendorController_1.AddFoodToMenu);
router.get("/getmenu/:id", vendorController_1.getAllMenu);
exports.default = router;
