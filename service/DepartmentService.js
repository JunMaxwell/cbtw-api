'use strict';


/**
 * Remove a Department
 *
 * id String Department UUID
 * no response value expected for this operation
 **/
exports.deleteDepartmentId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Department by ID
 *
 * id String Department UUID
 * returns Department
 **/
exports.getDepartmentId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "IT",
  "description" : "Department of IT people mostly",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all Department
 *
 * returns List
 **/
exports.getDepartments = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "IT",
  "description" : "Department of IT people mostly",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}, {
  "name" : "IT",
  "description" : "Department of IT people mostly",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Department of Employee
 *
 * id UUID Employee UUID
 * returns Department
 **/
exports.getEmployeesIdDepartment = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "IT",
  "description" : "Department of IT people mostly",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update existing Department
 *
 * id String Department UUID
 * no response value expected for this operation
 **/
exports.patchDepartmentId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create new Department
 *
 * body Department  (optional)
 * returns Department
 **/
exports.postDepartments = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "IT",
  "description" : "Department of IT people mostly",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Department details
 *
 * id String Department UUID
 * no response value expected for this operation
 **/
exports.putDepartmentId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Move employee to another Department
 *
 * id UUID Employee UUID
 * deptId UUID New Department UUID
 * no response value expected for this operation
 **/
exports.putEmployeesIdDepartment = function(id,deptId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

