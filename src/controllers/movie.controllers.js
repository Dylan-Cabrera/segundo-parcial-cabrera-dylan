import express from 'express';
import { Movies } from '../models/movie.model.js';
import { where } from 'sequelize';
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

export const createMovie = async (res,req) => {
    const {title, director, duration, genre, description} = req.body;

    //verificacion de title unico
    const  uniqueTitle = await Movies.findOne( { where: { title: title} } );
    if (uniqueTitle) {
        return res.status(400).json('No se pueden crear dos titulos iguales')
    };

    try{
        const createMovie = await Movies.create(title, director, duration, genre, description);
        res.status(200).json(createMovie);
    }catch(e) {
        res.status(500).json(`error al crear la pelicula, error: ${e}`);
    };
};

export const updateMovie = async (req,res) => {
    const {title, director, duration, genre, description} = req.body;
    const  uniqueTitle = await Movies.findOne( { where: { title: title} } );
    if (uniqueTitle) {
        return res.status(400).json('No se pueden crear dos titulos iguales');
    };

    try{
        const updateMovie = await Movies.update(title, director, duration, genre, description, {where : {id: req.params.id}})
        res.status(200).json(updateMovie)
    } catch(e) {
        res.status(500).json(`error al crear la pelicula, error: ${e}`);
    }
};