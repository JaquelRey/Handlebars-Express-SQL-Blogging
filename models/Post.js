const sequelize = require('../config/config')
// requre dependency
const { Sequelize, Model, DataTypes } = require('sequelize')
// get model property
// create class using model
class Post extends Model {}
// add post body keys and types
// add sequelize
Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Post
