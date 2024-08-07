const { Sequelize } = require('sequelize');
const { database } = require('../config/config');

const sequelize = new Sequelize(
  database.DB_NAME,
  database.DB_USER,
  database.DB_PASS,
    {
        host: database.DB_HOST,
        port: database.DB_PORT,
        dialect: database.dialect
       
    }
);
  sequelize.authenticate().then(() => {
    console.log('Conexion exitosa');
  }).catch((error) => {
    console.error('Error al conectar: ', error);
  });
  
  sequelize.close().then(() => {
    console.log('Conexion cerrada.');
  }).catch((error) => {
    console.error('No se puede cerrar la conexion: ', error);
  });
  
  module.exports = sequelize;