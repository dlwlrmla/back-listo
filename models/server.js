const express = require("express");
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usuariosPath =  '/api/usuarios'

    //Middlewares
    this.middlewares()
    //routes
    this.routes();
  }

  middlewares() {
    //cors
    this.app.use(cors())
    //parseo y lectura 
    this.app.use(express.json())
    //directorio publico
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user.routes'))

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
