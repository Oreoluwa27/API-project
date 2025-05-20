import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
// Create a connection pool to the MySQL database

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
