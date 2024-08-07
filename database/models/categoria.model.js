module.exports = (sequelize, Sequelize, DataTypes) => {
    const categoria = sequelize.define(
      "categoria", 
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
  
    return categoria;
  };