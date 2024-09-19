'use strict';


/**
 * Remove a Dependent from Employee
 * Remove a Dependent from Employee's Dependent List
 *
 * employeeId String Employee UUID
 * dependentId String Dependent UUID
 * no response value expected for this operation
 **/
exports.deleteEmployeesEmployeeIdDependentsDependentId = function(employeeId,dependentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get specific Dependent
 * Get specific dependent from Employee ID and Dependent ID
 *
 * employeeId String Employee UUID
 * dependentId String Dependent UUID
 * returns DependentRecord
 **/
exports.getEmployeesEmployeeIdDependentsDependentId = function(employeeId,dependentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "408-867-5309",
  "dob" : "1992-06-17T00:00:00.000+00:00",
  "employee_id" : {
    "address" : "22 Jump Street",
    "dob" : "1991-08-29T00:00:00.000+00:00",
    "last_name" : "Doe",
    "phone_number" : "+01-1566-884",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "title" : "Junior Developer",
    "department" : {
      "name" : "IT",
      "description" : "Department of IT people mostly",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "first_name" : "John",
    "email" : "john.doe@mail.com"
  },
  "last_name" : "Doe",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "relationship" : "Spouse",
  "first_name" : "Jane",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update existing Dependent of an Employee
 * Update existing Dependent of an Employee.  Only accept if Both IDs are available
 *
 * employeeId String Employee UUID
 * dependentId String Dependent UUID
 * no response value expected for this operation
 **/
exports.patchEmployeesEmployeeIdDependentsDependentId = function(employeeId,dependentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update specific Dependent
 * Update specific dependent from Employee ID and Dependent ID
 *
 * body DependentRecord  (optional)
 * employeeId String Employee UUID
 * dependentId String Dependent UUID
 * returns DependentRecord
 **/
exports.putEmployeesEmployeeIdDependentsDependentId = function(body,employeeId,dependentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phone" : "408-867-5309",
  "dob" : "1992-06-17T00:00:00.000+00:00",
  "employee_id" : {
    "address" : "22 Jump Street",
    "dob" : "1991-08-29T00:00:00.000+00:00",
    "last_name" : "Doe",
    "phone_number" : "+01-1566-884",
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "title" : "Junior Developer",
    "department" : {
      "name" : "IT",
      "description" : "Department of IT people mostly",
      "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "first_name" : "John",
    "email" : "john.doe@mail.com"
  },
  "last_name" : "Doe",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "relationship" : "Spouse",
  "first_name" : "Jane",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

