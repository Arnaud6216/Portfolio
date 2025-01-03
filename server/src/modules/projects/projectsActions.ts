import type { RequestHandler } from "express";
import projectsRepository from "./projectsRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all categories
    const projects = await projectsRepository.readAll();

    // Respond with the categories in JSON format
    res.json(projects);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const projectsId = Number(req.params.id);
    const projects = await projectsRepository.read(projectsId);

    if (projects == null) {
      res.sendStatus(404);
    } else {
      res.json(projects);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
