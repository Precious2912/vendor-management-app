import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import {
  RegisterVendor,
  LoginVendor,
  AddFoodToMenu,
  getAllMenu,
} from "../controller/vendorController";

/* GET vendors listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});
router.post("/register", RegisterVendor);
router.post("/login", LoginVendor);
router.post("/addfood", AddFoodToMenu);
router.get("/getmenu/:id", getAllMenu);

export default router;
