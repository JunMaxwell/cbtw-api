'use strict';

var utils = require('../utils/writer.js');
var EmployeeDependent = require('../service/EmployeeDependentService');

module.exports.deleteEmployeesEmployeeIdDependentsDependentId = function deleteEmployeesEmployeeIdDependentsDependentId (req, res, next, employeeId, dependentId) {
  EmployeeDependent.deleteEmployeesEmployeeIdDependentsDependentId(employeeId, dependentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesEmployeeIdDependentsDependentId = function getEmployeesEmployeeIdDependentsDependentId (req, res, next, employeeId, dependentId) {
  EmployeeDependent.getEmployeesEmployeeIdDependentsDependentId(employeeId, dependentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchEmployeesEmployeeIdDependentsDependentId = function patchEmployeesEmployeeIdDependentsDependentId (req, res, next, employeeId, dependentId) {
  EmployeeDependent.patchEmployeesEmployeeIdDependentsDependentId(employeeId, dependentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEmployeesEmployeeIdDependentsDependentId = function putEmployeesEmployeeIdDependentsDependentId (req, res, next, body, employeeId, dependentId) {
  EmployeeDependent.putEmployeesEmployeeIdDependentsDependentId(body, employeeId, dependentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
