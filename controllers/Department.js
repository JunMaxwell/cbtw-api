'use strict';

var utils = require('../utils/writer.js');
var Department = require('../service/DepartmentService');

module.exports.deleteDepartmentId = function deleteDepartmentId (req, res, next, id) {
  Department.deleteDepartmentId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDepartmentId = function getDepartmentId (req, res, next, id) {
  Department.getDepartmentId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDepartments = function getDepartments (req, res, next) {
  Department.getDepartments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesIdDepartment = function getEmployeesIdDepartment (req, res, next, id) {
  Department.getEmployeesIdDepartment(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchDepartmentId = function patchDepartmentId (req, res, next, id) {
  Department.patchDepartmentId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postDepartments = function postDepartments (req, res, next, body) {
  Department.postDepartments(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putDepartmentId = function putDepartmentId (req, res, next, id) {
  Department.putDepartmentId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEmployeesIdDepartment = function putEmployeesIdDepartment (req, res, next, id, deptId) {
  Department.putEmployeesIdDepartment(id, deptId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
