import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import { RegisterAdmin, LoginAdmin } from "../controller/adminController";

/* GET admin listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});
router.post("/register", RegisterAdmin);
router.post("/login", LoginAdmin);
export default router;
