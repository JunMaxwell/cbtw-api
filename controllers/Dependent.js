'use strict';

var utils = require('../utils/writer.js');
var Dependent = require('../service/DependentService');

module.exports.deleteEmployeesEmployeeIdDependents = function deleteEmployeesEmployeeIdDependents (req, res, next, employeeId) {
  Dependent.deleteEmployeesEmployeeIdDependents(employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDependentsDependentId = function getDependentsDependentId (req, res, next, id) {
  Dependent.getDependentsDependentId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesEmployeeIdDependents = function getEmployeesEmployeeIdDependents (req, res, next, employeeId, dependentName) {
  Dependent.getEmployeesEmployeeIdDependents(employeeId, dependentName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchDependentsId = function patchDependentsId (req, res, next, id) {
  Dependent.patchDependentsId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postDependentsDependentId = function postDependentsDependentId (req, res, next, body, id) {
  Dependent.postDependentsDependentId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEmployeesEmployeeIdDependents = function postEmployeesEmployeeIdDependents (req, res, next, body, employeeId) {
  Dependent.postEmployeesEmployeeIdDependents(body, employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putDependentsDependentId = function putDependentsDependentId (req, res, next, body, id) {
  Dependent.putDependentsDependentId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
