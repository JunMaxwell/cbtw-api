'use strict';

var utils = require('../utils/writer.js');
var Document = require('../service/DocumentService');

module.exports.deleteEmployeesEmployeeIdDocuments = function deleteEmployeesEmployeeIdDocuments (req, res, next, employeeId, documentId) {
  Document.deleteEmployeesEmployeeIdDocuments(employeeId, documentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDocuments = function getDocuments (req, res, next) {
  Document.getDocuments()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDocumentsId = function getDocumentsId (req, res, next, id) {
  Document.getDocumentsId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesEmployeeIdDocuments = function getEmployeesEmployeeIdDocuments (req, res, next, employeeId) {
  Document.getEmployeesEmployeeIdDocuments(employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchDocumentsId = function patchDocumentsId (req, res, next, id) {
  Document.patchDocumentsId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEmployeesEmployeeIdDocuments = function postEmployeesEmployeeIdDocuments (req, res, next, body, employeeId) {
  Document.postEmployeesEmployeeIdDocuments(body, employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putDocumentsId = function putDocumentsId (req, res, next, body, id) {
  Document.putDocumentsId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
