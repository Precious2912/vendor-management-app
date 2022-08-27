import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import { RegisterUser, LoginUser } from "../controller/userController";

/* GET users listing. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("respond with a resource");
});
router.post("/register", RegisterUser);

router.post("/login", LoginUser)

export default router;
