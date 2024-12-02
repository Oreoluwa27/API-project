import users from "../data/user.data.js";

/**
 * Add new user
 *
 * @param {object} details
 * @returns
 */
const insertUser = (details) => {
  const newUser = { id: users.length + 1, ...details };
  users.push(newUser);

  return newUser;
};

/**
 * Get user from Id
 *
 * @param {integer} userId
 * @returns
 */
const getUser = (userId) => {
  const findUser = users.find((user, index) => user.id === userId);

  return findUser;
};

/**
 * Get all users
 *
 * @returns
 */
const getAllUser = () => {
  return users;
};

/**
 * Update user
 *
 * @param {interger} userId
 * @param {object} newDetails
 * @returns
 */
const updateUser = (userId, newDetails) => {
  let currentUser = null;
  let userIndex;
  users.map((user, index) => {
    if (userId === user.id) {
      currentUser = user;
      userIndex = index;
    }
  });

  if (!currentUser) {
    return false;
  }

  const updatedUser = {
    ...currentUser,
    ...newDetails,
  };

  users.splice(userIndex, 1, updatedUser);

  return updatedUser;
};

/**
 * Delete a user
 *
 * @param {integer} userId
 * @returns
 */
const deleteUser = (userId) => {
  const userIndex = users.findIndex((user) => user.id === userId);

  users.splice(userIndex, 1);

  return;
};

export default { insertUser, getUser, getAllUser, updateUser, deleteUser };
