import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import { RegisterVendor } from "../controller/vendorController";

/* GET vendors listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});
router.post("/register", RegisterVendor);

export default router;
