import { Sequelize } from "sequelize";
import { config } from "../../config";
import { setupModels } from "../models";

const DB_NAME = config.dbName || '';
const DB_USER = config.dbUser || '';
const DB_PASS = config.dbPass || '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
});

setupModels(sequelize)

sequelize.sync();

const { models } = sequelize

export { models };
