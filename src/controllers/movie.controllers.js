import express from 'express';
import { Movies } from '../models/movie.model.js';
const app = express();

export const allMovies = async (res,req)=>{
    try { 
        const allMovies = await Movies.findAll();
        await res.status(200).json(allMovies);
    } catch(e) {
        res.status(500).json(`error al obtener todas las peliculas, error: ${e}`)
    }
};

export const movieID = async (res,req)=> {
    const id = await req.params.id;
    
    try{
        const movieID = await Movies.findByPk(id);

        if (!movieID) {
            return res.status(404).json( { message :"Movie not found"} )
        }
        
        res.status(200).json(movieID);

    } catch(e) {
        res.status(500).json(`error al obtener la pelicula, error: ${e}`);
    }
}
