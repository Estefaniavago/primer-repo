const database = require("../database/models/contenido.model");
const contenido = database.contenido;
const Op = database.Op;


 // Retrieve all Books from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

 contenido.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books."
      });
    });
    
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    contenido.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: `Error buscando por id = ${id}`
        });
      });
  };