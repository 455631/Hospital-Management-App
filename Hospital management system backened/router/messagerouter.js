import express from "express";
import { getallMessages, sendMessage } from "../controller/messageController.js";
import {isAdminAuthenticated} from "../middlewares/auth.js"

const router=express.Router();

router.post("/send",sendMessage);
router.get("/getall",isAdminAuthenticated,getallMessages);

export default router;