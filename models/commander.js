'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commander extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  commander.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    loyalty: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    died: DataTypes.STRING,
    birthPlace: DataTypes.STRING,
    background: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'commander',
  });
  return commander;
};