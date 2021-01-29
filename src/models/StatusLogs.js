const { DataTypes, Model, INTEGER } = require('sequelize');
import {sequelize} from "../sequelize";

export default class StatusLogs extends Model {}

StatusLogs.init({
  // Model attributes are defined here
  appId: {
      type: INTEGER
  },
  providerId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  recipient: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  country: {
      type: DataTypes.CHAR,
  },
  status: {
      type: DataTypes.STRING
  },
  retryCount: {
      type: DataTypes.STRING
  },
  messageId: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  expireTime: {
    type: DataTypes.INTEGER
  },
  bulkId: {
    type: DataTypes.STRING
  },
  sentAt: {
    type: DataTypes.DATE
  },
  doneAt: {
    type: DataTypes.DATE
  },
  lastAttemptAt: {
    type: DataTypes.DATE
  },
  deliveryStartTime: {
    type: DataTypes.DATE
  },
  daysToBeSent: {
    type: DataTypes.JSON
  },
  deliveryEndTime: {
    type: DataTypes.DATE
  },
  validityPeriod: {
    type: DataTypes.INTEGER
  },
  emailRecipients: {
    type: DataTypes.JSON
  },
  message: {
    type: DataTypes.TEXT
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'status_logs' // We need to choose the model name
});

// the defined model is the class itself
console.log(StatusLogs === sequelize.models.StatusLogs); // true