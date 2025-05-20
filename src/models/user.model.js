import db from "../data/db.js";

/**
 * Add new user
 *
 * @param {object} details
 * @returns
 */
const insertUser = async (details) => {
  const { name, email, city, country } = details;

  const [result] = await db.execute(
    'INSERT INTO users (name, email, city, country) VALUES (?, ?, ?, ?)',
    [name, email, city, country]
  );

  return {
    id: result.insertId,
    ...details,
  };
};

/**
 * Get user from Id
 *
 * @param {integer} userId
 * @returns
 */
const getUser = async (userId) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [userId]);
  return rows[0] || null;
};

/**
 * Get all users
 *
 * @returns
 */
const getAllUser = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

/**
 * Update user
 *
 * @param {interger} userId
 * @param {object} newDetails
 * @returns
 */
const updateUser = async (userId, newDetails) => {
  const fields = [];
  const values = [];

  for (const [key, value] of Object.entries(newDetails)) {
    fields.push(`${key} = ?`);
    values.push(value);
  }

  values.push(userId);

  const [result] = await db.execute(
    `UPDATE users SET ${fields.join(', ')} WHERE id = ?`,
    values
  );

  return result.affectedRows > 0 ? await getUser(userId) : false;
};

/**
 * Delete a user
 *
 * @param {integer} userId
 * @returns
 */
const deleteUser = async (userId) => {
  await db.execute('DELETE FROM users WHERE id = ?', [userId]);

  return true;
};

export default { insertUser, getUser, getAllUser, updateUser, deleteUser };
