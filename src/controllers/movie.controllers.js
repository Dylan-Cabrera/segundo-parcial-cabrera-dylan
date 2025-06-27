import express from 'express';
import { sequelize } from '../config/database.js';
import { Movies } from '../models/movie.model.js';
const app = express();

export const allMovies = async (res,req)=>{
    try { 
        const allMovies = Movies.findAll();
        await res.status(200).json(allMovies);
    } catch(e) {
        res.status(500).json(`error al obtener todos los personajes, error: ${e}`)
    }
};