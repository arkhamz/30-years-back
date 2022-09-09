'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.battle, {
        through:"userProgress",
        foreignKey: "userId"
      })
    }
  }
  user.init({
    displayName: {type:DataTypes.STRING, allowNull:false},
    email: {type:DataTypes.STRING, allowNull:false},
    uid: {type:DataTypes.STRING, allowNull:false}
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};