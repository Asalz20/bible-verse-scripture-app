import express from "express";
const app = express();
import cors from "cors";
import session from "express-session";
import usersRouter from "./routes/usersRoute";
import authRouter from "./routes/authRoute";
import passport from "passport";
import initialize from "./config/passportConfig";

initialize(passport);

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/users/register", (req, res) => {
//   res.send("register");
// });

// app.get("/users/login", (req, res) => {
//   res.send("login");
// });

app.use("/api/users", usersRouter);
app.use("/api/users/", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
