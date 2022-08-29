import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import {
  RegisterAdmin,
  LoginAdmin,
  verifyVendor,
} from "../controller/adminController";
import { authAdmin } from "../middleware/auth";

/* GET admin listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});
router.post("/register", RegisterAdmin);
router.post("/login", LoginAdmin);
router.patch("/verifyvendor/:id", authAdmin, verifyVendor);
export default router;
