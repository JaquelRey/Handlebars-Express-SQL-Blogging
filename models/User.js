const sequelize = require('../config/config')
const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')





class User extends Model {
  // verify password
  verifyPw(loginPw) {
    return bcrypt.compareSync(loginPw, this.password)
  }
}

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
