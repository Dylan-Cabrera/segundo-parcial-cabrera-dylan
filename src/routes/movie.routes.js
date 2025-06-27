import { Router } from "express";
const router = Router();

import { allMovies, movieID, createMovie } from "../controllers/movie.controllers.js";

router.get('/movies', allMovies);
router.get('/movies:id', movieID);
router.post('/movies', createMovie);

export default router;