import express from "express";
import { StatusCodes } from "http-status-codes";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("Welcome");
});

router.get("/ping", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("ping...");
});

export default router;
