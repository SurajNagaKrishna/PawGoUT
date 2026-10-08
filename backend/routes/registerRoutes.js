import { register } from "../controllers/registrationController.js";
import express from "express";
const router = express.Router()
router.post("/", register)
export default router