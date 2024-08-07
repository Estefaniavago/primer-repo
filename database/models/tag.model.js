module.exports = (sequelize, Sequelize, DataTypes) => {
    const tag = sequelize.define(
      "tag", 
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
  
    return tag;
  };