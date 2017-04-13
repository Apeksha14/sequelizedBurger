// Import the ORM to create functions that will interact with the database.

'use strict'
var Sequelize = require('sequelize');
var config    = require(__dirname + '/../config/config.json')["production"];
var sequelize = new Sequelize(config.database, config.username, config.password, config);



module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
    burger_name: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
     
	},{
      timestamps: false
    },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here

      }
    }
  });
  return burgers;
};


// Export the database functions for the controller (catsController.js).
