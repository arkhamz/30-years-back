'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class battle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  battle.init({
    prelude: DataTypes.TEXT,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    videoUrl: DataTypes.TEXT,
    year: DataTypes.STRING,
    date: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    army_one: DataTypes.JSONB,
    army_two: DataTypes.JSONB,
    result: DataTypes.STRING,
    questions: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'battle',
  });
  return battle;
};