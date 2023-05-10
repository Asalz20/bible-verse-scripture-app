import { Router } from "express";
import passport from "passport";
const router = Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(200);
});

export default router;
