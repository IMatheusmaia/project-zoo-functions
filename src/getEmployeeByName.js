const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const { employees } = data;
  const firstName = employees.find((nome) => nome.firstName === employeeName);
  const lastName = employees.find((nome) => nome.lastName === employeeName);
  const person = firstName || lastName;
  if (!person) {
    return {};
  }
  return person;
};
getEmployeeByName();

module.exports = getEmployeeByName;
