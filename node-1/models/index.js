const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Chandu@123', {
  host: 'localhost',
  port: 5433,   
  dialect: 'postgres',
});
sequelize.authenticate()
  .then(() => console.log('DB connection established'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
