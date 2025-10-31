const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
    console.log('Banco autenticado com sucesso!')
}
catch (err) {
    console.error('Não foi possivel se autenticar: ', err.message);
}

module.exports = sequelize;