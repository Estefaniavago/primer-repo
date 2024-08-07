module.exports = (sequelize, Sequelize, DataTypes) => {
    const actor = sequelize.define(
      "actor", 
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_apellido: {
          type: DataTypes.STRING
        }
               

      }
    );
  
    return actor;
  };