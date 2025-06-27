import { Router } from "express";
const router = Router();

import { allMovies, movieID, createMovie, updateMovie } from "../controllers/movie.controllers.js";

router.get('/movies', allMovies);
router.get('/movies:id', movieID);
router.post('/movies', createMovie);
router.put('/movies:id', updateMovie);

export default router;