import * as dotenv from 'dotenv';
dotenv.config();
import { Dialect, Sequelize } from 'sequelize';
import userModel from './user';

const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbDialect: Dialect = process.env.DB_DIALECT as Dialect;

if (!dbName || !dbUsername || !dbPassword || !dbHost || !dbDialect) {
  throw new Error('One or more required environment variables are not defined.');
}

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

const User = userModel(sequelize);

export { sequelize, User };
