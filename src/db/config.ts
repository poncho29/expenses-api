import { Sequelize } from "sequelize";

const DB_NAME = process.env.NAME_DB || '';
const DB_USER = process.env.USER_DB || '';
const DB_PASS = process.env.PASS_DB || '';


const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'mysql'
});


export default connection;