import userModel from "../models/user.model.js";
import { StatusCodes } from "http-status-codes";

const STATUS = {
  success: "OK",
  failure: "NO",
};
/**
 * Add new user
 *
 * @param {*} req
 * @param {*} res
 */
const addUser = async (req, res) => {
  const user = req.body;

  const addedUser = await userModel.insertUser(user);

  res
    .status(StatusCodes.CREATED)
    .send({ status: STATUS.success, message: addedUser });
};

/**
 * Get new user
 *
 * @param {*} req
 * @param {*} res
 */
const getUser = async (req, res) => {
  const id = parseInt(req.params.id);

  const exist = await userModel.getUser(id);

  if (exist) {
    res.status(StatusCodes.OK).send({ status: STATUS.success, message: exist });
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send({ status: STATUS.failure, message: "User not found" });
  }
};

/**
 * Get all user
 *
 * @param {*} req
 * @param {*} res
 */
const getAllUsers = async (req, res) => {
  const allUsers = await userModel.getAllUser();
  console.log(allUsers);
  res
    .status(StatusCodes.OK)
    .send({ status: STATUS.success, message: allUsers });
};

/**
 * Update user
 *
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
  const user = req.body;

  const id = parseInt(req.params.id);

  const updated = await userModel.updateUser(id, user);

  if (updated) {
    res
      .status(StatusCodes.OK)
      .send({ status: STATUS.success, message: updated });
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send({ status: STATUS.failure, message: "User not found" });
  }
};

/**
 * Delete user
 *
 * @param {*} req
 * @param {*} res
 */
const removeUser = (req, res) => {
  const id = parseInt(req.params.id);

  const exist = userModel.getUser(id);

  if (exist) {
    userModel.deleteUser(id);
    res
      .status(StatusCodes.OK)
      .send({ status: STATUS.success, message: "User deleted" });
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send({ status: STATUS.failure, message: "User not found" });
  }
};

export default { addUser, getUser, getAllUsers, updateUser, removeUser };
