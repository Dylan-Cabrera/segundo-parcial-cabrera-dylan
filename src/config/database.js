import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});
 
export const startBD = async () => {
    try {
        await sequelize.authenticate();
        console.log("Se conecto a la base de datos")
        await sequelize.sync();
    } catch(e) {
        console.log(`Hubo un error al conectar a la base de datos ${e}`)
    }
}



