const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
server.use(bodyParser.json({
    limit: '5mb'
}));

require('./route/clienteRouter')(server);
const clienteCtr = require('../src/cliente/clienteController')


server.listen(3000, () => {
    console.log("server is listening on port 3000");
});

server.route('/cliente').get(clienteCtr.listarCliente);