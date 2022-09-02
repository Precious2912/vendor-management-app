import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import {
  RegisterVendor,
  LoginVendor,
  AddFoodToMenu,
  getAllVendorDetails,
  getAllDetailsWithActiveStatus,
  getAllDetailsWithInactiveStatus,
  getAllDetailsWithPendingStatus,
  updateOrderStatus,
} from "../controller/vendorController";
import { authVendor } from "../middleware/auth";

/* GET vendors listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});
router.post("/register", RegisterVendor);
router.post("/login", LoginVendor);
router.post("/addFood", authVendor, AddFoodToMenu);
router.get("/getActiveMenu/:id", getAllDetailsWithActiveStatus);
router.get("/getInactiveMenu/:id", getAllDetailsWithInactiveStatus);
router.get("/getPendingMenu/:id", getAllDetailsWithPendingStatus);
router.get("/getAllVendorDetails/:id", getAllVendorDetails);
router.get("/updateOrderStatus/:id", updateOrderStatus);

export default router;
