"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class battle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //battle belongs to many users via battleId of userProgress table
      battle.belongsToMany(models.user, {
        through: "userProgress",
        foreignKey: "battleId"
      });
    }
  }
  battle.init(
    {
      prelude: DataTypes.TEXT,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.TEXT,
      videoUrl: DataTypes.TEXT,
      year: DataTypes.INTEGER,
      date: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      armyOne: DataTypes.JSONB,
      armyTwo: DataTypes.JSONB,
      result: DataTypes.STRING,
      questions: DataTypes.JSONB,
    },
    {
      sequelize,
      modelName: "battle",
    }
  );
  return battle;
};
