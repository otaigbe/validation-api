const { DataTypes, Model, INTEGER } = require('sequelize');
import {sequelize} from "../sequelize";

export default class Apps extends Model {}

Apps.init({
  // Model attributes are defined here
  id: {
      type: INTEGER,
      primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registerer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
      type: DataTypes.STRING,
      allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'apps' // We need to choose the model name
});

console.log(Apps === sequelize.models.Apps); // true