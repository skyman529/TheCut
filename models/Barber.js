const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Barber extends Model {}

Barber.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    available_barbers: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [[
        'Eugene (not Available weekends)', 
        'Alex (Available Weekds)',
        "Skyler (Available weekends)",
        "Valeryo (Not Available weekends)",
      ]],
    },
    select_service: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [[
        "Face Shave (30 min)", 
        "Haircut (45 min)",
        "Haircut/Beard (1 hr)",
        "Supreme (1 hr)",
        "Eyebros (10 min)",
        "haircut W Desgin (1 hr)",
        "kids cut (45 min)",
      ]],
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [[
        "Face Shave ($15)", 
        "Haircut ($50)",
        "Haircut/Beard ($60)",
        "Supreme ($65)",
        "Eyebros ($10)",
        "haircut W Desgin ($60)",
        "kids cut ($30)",
      ]],
    },
      select_data: {
        type: DataTypes.STRING,
        allowNull: false,
        isDate: true,
        
      },

   
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'barber',
  }
);

module.exports = Barber;
