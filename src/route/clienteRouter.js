const ClienteController = require('../cliente/clienteController');

module.exports = server => {
    server.route('/cliente')
        .get(ClienteController.listarCliente);
}