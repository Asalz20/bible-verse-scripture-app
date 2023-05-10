import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
// const isProduction = process.env.NODE_ENV === "production";

// const conn = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}: ${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const pool = new Pool({
//   conn: isProduction ? process.env.DATABASE_URL : conn,
// });

const pool = new Pool({
  user: "alexsalazar",
  host: "localhost",
  database: "bvsauth",
  password: "password",
  port: 5432,
});

export default pool;
