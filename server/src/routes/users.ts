import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import {
  RegisterUser,
  LoginUser,
  MakeOrders,
  getOrders,
} from "../controller/userController";

/* GET users listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});
router.post("/register", RegisterUser);

router.post("/login", LoginUser);
router.get("/getorders/:id", getOrders);
router.post("/createorders", MakeOrders);

export default router;
