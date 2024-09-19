'use strict';


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
 * Get All Documents
 *
 * returns List
 **/
exports.getDocuments = function() {
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
 * Get Document by ID
 *
 * id String Document UUID
 * returns Document
 **/
exports.getDocumentsId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
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
 * Update Document by ID
 *
 * body Document  (optional)
 * id String Document UUID
 * returns Document
 **/
exports.putDocumentsId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

