import { Strategy } from "passport-local";
import pool from "../dbConfig";
import bcrypt from "bcrypt";
import { authenticate } from "passport";

// interface Props {
//   email: string;
//   password: string;
//   done: any;
// }

function initialize(passport: any) {
  const authenticateUser = (email: string, password: string, done: any) => {
    pool.query(
      `SELCT * FROM users WHERE email = $1`,
      [email],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);
        if (results.rows.length > 0) {
          // Found user in db
          const user = results.rows[0];
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
              throw err;
            } else if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false), { message: "Password is not correct" };
            }
          });
        } else {
          // No users found
          return done(null, false, {
            message: "No user with that email address",
          });
        }
      }
    );
  };

  passport.use(
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      authenticateUser
    )
  );

  // takes user and stores users id in session
  passport.serializeUser((user: any, done: any) => done(null, user.id));

  // uses id to obtain user details in database and store full object into session
  passport.deserializeUser((id: any, done: any) => {
    pool.query(`SELECT * FROM users WHERE id = $1`, [id], (err, results) => {
      if (err) {
        return done(err);
      }
      console.log(`ID is ${results.rows[0].id}`);
      return done(null, results.rows[0]);
    });
  });
}

export default initialize;
