'use strict';


/**
 * Remove all Dependents of an Employee
 *
 * employeeId String Employee UUID
 * no response value expected for this operation
 **/
exports.deleteEmployeesEmployeeIdDependents = function(employeeId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Dependent by dependent_id
 *
 * id String Dependent UUID
 * returns DependentRecord
 **/
exports.getDependentsDependentId = function(id) {
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
 * Get all Dependents of an Employee
 * Get all Dependents of an Employee using Employee ID
 *
 * employeeId String Employee UUID
 * dependentName String Dependent's name (optional)
 * returns List
 **/
exports.getEmployeesEmployeeIdDependents = function(employeeId,dependentName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update existing Dependent Details
 *
 * id String Dependent UUID
 * no response value expected for this operation
 **/
exports.patchDependentsId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add Dependent details
 *
 * body DependentRecord  (optional)
 * id String Dependent UUID
 * returns DependentRecord
 **/
exports.postDependentsDependentId = function(body,id) {
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
 * Add dependents to an Employee
 * Add an array of dependents associated with an Employee
 *
 * body List  (optional)
 * employeeId String Employee UUID
 * returns List
 **/
exports.postEmployeesEmployeeIdDependents = function(body,employeeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Dependent Details
 *
 * body DependentRecord  (optional)
 * id String Dependent UUID
 * returns DependentRecord
 **/
exports.putDependentsDependentId = function(body,id) {
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

