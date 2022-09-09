'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userProgress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userProgress.belongsTo(models.battle);
      userProgress.belongsTo(models.user);

    }
  }
  userProgress.init({
    userId: {type:DataTypes.INTEGER,allowNull:false},
    battleId: {type:DataTypes.INTEGER, allowNull:false},
    unlocked: {type:DataTypes.BOOLEAN, allowNUll:false, defaultValue:false}
  }, {
    sequelize,
    modelName: 'userProgress',
  });
  return userProgress;
};