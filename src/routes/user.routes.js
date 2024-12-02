import express from "express";
import { StatusCodes } from "http-status-codes";
import { expressYupMiddleware } from "express-yup-middleware";

import userController from "../controllers/user.controller.js";
import { addUser, updateUser, getUser, deleteUser } from "../user.schema.js";

const router = express.Router();

router.get("/all", userController.getAllUsers);

router.get(
  "/:id",
  expressYupMiddleware({
    schemaValidator: getUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST,
  }),
  userController.getUser
);

router.post(
  "/add",
  expressYupMiddleware({
    schemaValidator: addUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST,
  }),
  userController.addUser
);

router.put(
  "/update/:id",
  expressYupMiddleware({
    schemaValidator: updateUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST,
  }),
  userController.updateUser
);

router.delete(
  "/:id",
  expressYupMiddleware({
    schemaValidator: deleteUser,
    expectedStatusCode: StatusCodes.BAD_REQUEST,
  }),
  userController.removeUser
);

export default router;
