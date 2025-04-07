const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_name'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_password'
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;
