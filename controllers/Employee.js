'use strict';

var utils = require('../utils/writer.js');
var Employee = require('../service/EmployeeService');

module.exports.allEmployee = function allEmployee (req, res, next, skip, limit) {
  Employee.allEmployee(skip, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEmployeesEmployeeIdDependents = function deleteEmployeesEmployeeIdDependents (req, res, next, employeeId) {
  Employee.deleteEmployeesEmployeeIdDependents(employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEmployeesEmployeeIdDocuments = function deleteEmployeesEmployeeIdDocuments (req, res, next, employeeId, documentId) {
  Employee.deleteEmployeesEmployeeIdDocuments(employeeId, documentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEmployeesId = function deleteEmployeesId (req, res, next, id) {
  Employee.deleteEmployeesId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesEmployeeIdDependents = function getEmployeesEmployeeIdDependents (req, res, next, employeeId, dependentName) {
  Employee.getEmployeesEmployeeIdDependents(employeeId, dependentName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesEmployeeIdDocuments = function getEmployeesEmployeeIdDocuments (req, res, next, employeeId) {
  Employee.getEmployeesEmployeeIdDocuments(employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesId = function getEmployeesId (req, res, next, id) {
  Employee.getEmployeesId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesIdDepartment = function getEmployeesIdDepartment (req, res, next, id) {
  Employee.getEmployeesIdDepartment(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchDocumentsId = function patchDocumentsId (req, res, next, id) {
  Employee.patchDocumentsId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchEmployeesId = function patchEmployeesId (req, res, next, id) {
  Employee.patchEmployeesId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEmployees = function postEmployees (req, res, next, body) {
  Employee.postEmployees(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEmployeesEmployeeIdDependents = function postEmployeesEmployeeIdDependents (req, res, next, body, employeeId) {
  Employee.postEmployeesEmployeeIdDependents(body, employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEmployeesEmployeeIdDocuments = function postEmployeesEmployeeIdDocuments (req, res, next, body, employeeId) {
  Employee.postEmployeesEmployeeIdDocuments(body, employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEmployeesId = function putEmployeesId (req, res, next, body, id) {
  Employee.putEmployeesId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEmployeesIdDepartment = function putEmployeesIdDepartment (req, res, next, id, deptId) {
  Employee.putEmployeesIdDepartment(id, deptId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
