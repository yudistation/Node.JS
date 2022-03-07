// Conexão com o banco de dados MySQL
const Sequelize = require('sequelize');

const databaseName = 'postapp';
const hostDB = 'localhost';
const userDB = 'root';
const passwordDB = 'root';

const sequelize = new Sequelize(databaseName, userDB, passwordDB, {
  host: hostDB,
  dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};