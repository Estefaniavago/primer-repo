module.exports = (sequelize, Sequelize, DataTypes) => {
    const genero = sequelize.define(
      "genero", 
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
          type: DataTypes.STRING
        }
               

      }
    );
  
    return genero;
  };