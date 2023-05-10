import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import passport from "passport";
import pool from "../dbConfig";

type Params = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

export const postUser: RequestHandler = async (req, res) => {
  // Assigning variables to the names of my keys that have values :M
  const { name, email, password, password2 }: Params = req.body;

  console.log({ name, email, password, password2 });

  let hashedPassword = await bcrypt.hash(password, 10);

  pool.query(
    `SELECT * FROM users
      WHERE email = $1`,
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(results.rows);
      if (results.rows.length > 0) {
        console.log("Email already registered");
      } else {
        pool.query(
          `INSERT INTO users (name, email, password)
          VALUES ($1, $2, $3)
          RETURNING id, password`,
          [name, email, hashedPassword],
          (err, results) => {
            if (err) {
              throw err;
            }
            console.log(results.rows);
          }
        );
      }
      return res.status(200).json(results.rows);
    }
  );
};
