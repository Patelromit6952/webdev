import express from "express"
import { checkauth, login, logout, signup ,updateprofile } from "../controllers/auth.controller.js";
import { protectRoute  } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.put("/updateprofile", protectRoute,updateprofile);
router.get("/check",protectRoute,checkauth);

export default router;