import { Router } from "express";
const router = Router();

import { allMovies } from "../controllers/movie.controllers";

router.get('/movies', allMovies);

export default router;