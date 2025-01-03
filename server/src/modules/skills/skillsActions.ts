import type { RequestHandler } from "express";
import skillsRepository from "./skillsRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all categories
    const skills = await skillsRepository.readAll();

    // Respond with the categories in JSON format
    res.json(skills);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const skillsId = Number(req.params.id);
    const skills = await skillsRepository.read(skillsId);

    if (skills == null) {
      res.sendStatus(404);
    } else {
      res.json(skills);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
