const { Sequelize, DataTypes, Op } = require("sequelize");
const { database } = require('../../config/config.js');

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

const database = {};

database.Sequelize = Sequelize;
database.Op = Op;
database.sequelize = sequelize;
// incializo las tablas
database.actor = require("./actor.model.js")(sequelize, Sequelize, DataTypes);
database.contenido = require("./contenido.model.js")(sequelize, Sequelize, DataTypes);
database.categoria = require("./categoria.model.js")(sequelize, Sequelize, DataTypes);
database.contenidoactor = require("./contenidoactor.models.js")(sequelize,Sequelize, Datatypes);
database.contenidotag = require("./contenidotag.model.js")(sequelize,Sequelize, Datatypes);
database.genero = require("./genero.model.js")(sequelize,Sequelize, Datatypes);
database.tag = require("./tag.model.js")(sequelize,Sequelize, Datatypes);


// relaciones genero una tabla aux 
database.contenido.belongsToMany(database.actor, {
    through: 'contenidoactor',
    foreignKey: 'id_contenido',
    otherKey: 'id_actor'
});

database.actor.belongsToMany(database.contenido, {
    through: 'contenidoactor',
    foreignKey: 'id_contenido',
    otherKey: 'id_actor'
});


const Actor = database.actor;
const Contenido= database.contenido;



// Sync database and call initial function
sequelize.sync().then(() => {
    initial(); // ----- si ya tienen los datos ignored esta funcion
}).catch(err => {
    console.error("Error syncing database:", err);
});

module.exports = database;