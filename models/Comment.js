const sequelize = require("../config/config");
// require dependency
const { Sequelize, Model, DataTypes } = require("sequelize");
// get model property

// create class with model
class Comment extends Model {}
// add body and sequelize
Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Comment;
