import { Router } from "express";
const router = Router();

import { allMovies, movieID } from "../controllers/movie.controllers.js";

router.get('/movies', allMovies);
router.get('/movies:id', movieID)

export default router;