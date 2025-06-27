import express from 'express';
import routerMovies from './src/routes/movie.routes.js';
import { startBD } from './src/config/database.js';

import 'dotenv/config'


const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//middleware
app.use('/api', routerMovies)

app.listen(PORT, async () => {
    await startBD(),
    console.log(`servidor escuchando en el puerto ${PORT}`)
})