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
router.post("/addFood", vendorController_1.AddFoodToMenu);
router.get("/getActiveMenu/:id", vendorController_1.getAllDetailsWithActiveStatus);
router.get("/getInactiveMenu/:id", vendorController_1.getAllDetailsWithInactiveStatus);
router.get("/getPendingMenu/:id", vendorController_1.getAllDetailsWithPendingStatus);
router.get("/getAllVendorDetails/:id", vendorController_1.getAllVendorDetails);
router.get("/updateOrderStatus/:id", vendorController_1.updateOrderStatus);
router.get("/updatevendor/:id", vendorController_1.updateVendorRecord);
router.get("/updatemenu/:id", vendorController_1.updateMenu);
exports.default = router;
