import express, { Router } from "express";
import { getUserProfile, deleteUser } from "../controllers/userController";

const router: Router = express.Router();

/** Route to get the user's profile. */
router.get("/profile", getUserProfile);

/** Route to delete a user (students to implement authorization). */
router.delete("/:id", deleteUser);

export default router;