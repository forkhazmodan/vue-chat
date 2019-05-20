'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    key: DataTypes.STRING,
    name: DataTypes.STRING(50)
  }, {});
  Chat.associate = function(models) {
    // associations can be defined here
  };
  return Chat;
};
