const sequelize = require('../config/config')
//require dependency
const { Model, DataTypes } = require('sequelize')
// get model property
const bcrypt = require('bcrypt')
// require dependency to protech user data when verifying login info

// create user class with model
// user must have a verified match to pw, 
// which is protected during verification using bcrypt
class User extends Model {
  verifyPw(loginPw) {
    return bcrypt.compareSync(loginPw, this.password)
  }
}
// create a user: 
// an automatically generated ID
// a username,
// and a password of at least 8 characters
// hooks for bcrypt password creatiom and update
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8] //8 chars required
      }
    }
  },
  {
    hooks: {
      // lifecycle hooks, returning user data as promise
      beforeCreate: async (newUser) => {
        newUser.password = await bcrypt.hash(newUser.password, 10)
        return newUser
      },
      beforeUpdate: async (updateUser) => {
        updateUser.password = await bcrypt.hash(updateUser.password, 10)
        return updateUser
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
)

module.exports = User
