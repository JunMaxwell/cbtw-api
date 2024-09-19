'use strict';


/**
 * Returns all Employee List
 * Fetch all Employee records
 *
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.allEmployee = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


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
 * Remove a Document of an Employee
 *
 * employeeId String Employee UUID
 * documentId UUID Document UUID
 * no response value expected for this operation
 **/
exports.deleteEmployeesEmployeeIdDocuments = function(employeeId,documentId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove Employee
 * And remove all of this Employee's relationship with their dependent.
 *
 * id String Employee UUID
 * no response value expected for this operation
 **/
exports.deleteEmployeesId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
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
 * Get All Document of Employee
 * Get All Document of Employee from Employee ID
 *
 * employeeId String Employee UUID
 * returns List
 **/
exports.getEmployeesEmployeeIdDocuments = function(employeeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "path" : "http://example.com/aeiou",
  "owner_id" : {
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
  "name" : "Social Security Card",
  "uploaded_date" : "2016-08-29T09:12:33.001Z",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "National ID"
}, {
  "path" : "http://example.com/aeiou",
  "owner_id" : {
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
  "name" : "Social Security Card",
  "uploaded_date" : "2016-08-29T09:12:33.001Z",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "National ID"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Employee by ID
 *
 * id String Employee UUID
 * returns EmployeeRecord
 **/
exports.getEmployeesId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
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
 * Update existing Document
 *
 * id String Document UUID
 * no response value expected for this operation
 **/
exports.patchDocumentsId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an existing Employee
 *
 * id String Employee UUID
 * no response value expected for this operation
 **/
exports.patchEmployeesId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create new Employee
 *
 * body EmployeeRecord  (optional)
 * returns EmployeeRecord
 **/
exports.postEmployees = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * Update Document details of Employee
 * Update a list of document details of an Employee using Employee Id
 *
 * body List  (optional)
 * employeeId String Employee UUID
 * returns List
 **/
exports.postEmployeesEmployeeIdDocuments = function(body,employeeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "path" : "http://example.com/aeiou",
  "owner_id" : {
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
  "name" : "Social Security Card",
  "uploaded_date" : "2016-08-29T09:12:33.001Z",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "National ID"
}, {
  "path" : "http://example.com/aeiou",
  "owner_id" : {
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
  "name" : "Social Security Card",
  "uploaded_date" : "2016-08-29T09:12:33.001Z",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "National ID"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Employee
 *
 * body EmployeeRecord  (optional)
 * id String Employee UUID
 * returns EmployeeRecord
 **/
exports.putEmployeesId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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

