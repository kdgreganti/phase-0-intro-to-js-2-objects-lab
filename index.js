// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });


function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    return {
        ...employee,
        [streetAddress]: '11 Broadway',
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = '12 Broadway';
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
}