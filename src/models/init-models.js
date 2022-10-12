var DataTypes = require("sequelize").DataTypes;
var _tasks = require("./tasks");

function initModels(sequelize) {
  var tasks = _tasks(sequelize, DataTypes);
  return {
    tasks,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
