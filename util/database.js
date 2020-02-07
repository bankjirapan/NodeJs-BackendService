const Sequelize = require('sequelize');

const sequelize = new Sequelize('hellonode','root','',{
    dialect : 'mysql',
    host : 'localhost',
    port : '33060'
})

module.exports = sequelize;