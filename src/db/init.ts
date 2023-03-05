import connection from "./config";

export const initDb = async () => {
  try {
    await connection.authenticate();
    await connection.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}