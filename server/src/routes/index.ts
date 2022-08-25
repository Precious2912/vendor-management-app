import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({ message: "success" });
});

export default router;
