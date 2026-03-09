import express from "express";
import {createProject, getProjects} from "../controllers/projectController.js";

const router = express.Router();

router.post("/create", createProject);
router.get("/all", getProjects);

export default router;