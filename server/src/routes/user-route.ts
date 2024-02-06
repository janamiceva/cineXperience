import express from "express";
import UserController from "../controllers/users-controller";

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserByUserId);
router.post('/signUp', UserController.createUser);


export default router;