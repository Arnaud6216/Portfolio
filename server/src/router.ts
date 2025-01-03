import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define skills-related routes
import skillsActions from "./modules/skills/skillsActions";

router.get("/api/skills", skillsActions.browse);
router.get("/api/skills/:id", skillsActions.read);

/* ************************************************************************* */
// Define skills-related routes
import projectsActions from "./modules/projects/projectsActions";

router.get("/api/projects", projectsActions.browse);
router.get("/api/projects/:id", projectsActions.read);

/* ************************************************************************* */

export default router;
