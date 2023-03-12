import { Sequelize } from "sequelize";
import setupModels from "../models";

const DB_NAME = process.env.NAME_DB || '';
const DB_USER = process.env.USER_DB || '';
const DB_PASS = process.env.PASS_DB || '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  // logging: false
});

setupModels(sequelize)

sequelize.sync()

export default sequelize;
