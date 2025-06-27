import express from 'express';
// import { startBD } from './src/config/database.js';

import 'dotenv/config'
import { startBD } from './src/config/database.js';
// startBD();


const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// app.use('/api',)

app.listen(PORT, async () => {
    await startBD(),
    console.log(`servidor escuchando en el puerto ${PORT}`)
})