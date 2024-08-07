module.exports = (sequelize, Sequelize, DataTypes) => {
    const contenido = sequelize.define(
      "contenido", 
      {
        id: {
            type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        titulo: {
          type: DataTypes.STRING
        },
        id_categoria: {
          type: DataTypes.INTEGER
        },
        id_genero:{
            type: DataTypes.INTEGER
        },
        resumen:{
            type: DataTypes.STRING
        },
        temporadas:{
            type: DataTypes.INTEGER
        },
        treailer: {
            type: DataTypes.STRING
        },
        duracion: {
            type: DataTypes.INTEGER
        }

      }
    );
  
    return contenido;
  };