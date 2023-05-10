import { postUser } from "../controllers/userCtlr";
import { Router } from "express";
const router = Router();

router.post("/register", postUser);

export default router;
