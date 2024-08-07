module.exports = (sequelize, Sequelize, DataTypes) => {
    const contenidoactor = sequelize.define(
      "contenidoactor", 
      {
        id_contenido: {
            type: DataTypes.INTEGER,
            references: {
                model: 'contenido', 
                key: 'id'
            },
            primaryKey: true
        },
        id_actor: {
            type: DataTypes.INTEGER,
            references: {
                model: 'actor', // nombre de la tabla de Actores
                key: 'id'
            },
            primaryKey: true
        }
      }
    );
  
    return contenidoactor;
  }; 
      