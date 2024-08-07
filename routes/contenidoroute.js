module.exports = app => {
    const contenidocontroller = require("../controller/contenidocontroller");
  
    const router = require("express").Router();
  
   
    // Retrieve all Books
    router.get("/", contenidocontroller.findAll);
  
     // Retrieve a single Book with id
    router.get("/:id", contenidocontroller.findOne);

    
  
  };
  