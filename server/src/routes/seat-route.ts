import express from "express";
import SeatsController from "../controllers/seats-controller";

const router = express.Router()

router.get('/', SeatsController.getAllSeats)

export default router;