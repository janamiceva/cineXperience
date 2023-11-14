import express from "express";
import HallsController from "../controllers/halls-controller";

const router = express.Router()

router.get('/', HallsController.getAllHalls)

export default router;