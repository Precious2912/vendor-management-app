import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import { RegisterAdmin } from "../controller/adminController";

/* GET admin listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});
router.post("/register", RegisterAdmin);

export default router;
