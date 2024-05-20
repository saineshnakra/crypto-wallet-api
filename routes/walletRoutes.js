import express from "express";
import { createWallet } from "../controllers/walletController.js";

const router = express.Router();

router.post("/create", createWallet);

export default router;
