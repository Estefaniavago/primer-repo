module.exports = (sequelize, Sequelize, DataTypes) => {
    const contenidotag = sequelize.define(
      "contenidotag", 
      {
        id_contenido: {
            type: DataTypes.INTEGER,
            references: {
                model: 'contenido', 
                key: 'id'
            },
            primaryKey: true
        },
        id_tag: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag', 
                key: 'id'
            },
            primaryKey: true
        }
      }
    );
  
    return contenidotag;
  }; 