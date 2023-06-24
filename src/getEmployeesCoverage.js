const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

const findEmployee = (employeer) => {
  const findById = employees.find((person) => person.id === employeer.id);
  const findByFirstName = employees.find((person) => person.firstName === employeer.name);
  const findByLastName = employees.find((person) => person.lastName === employeer.name);

  if (findById === undefined && findByFirstName === undefined && findByLastName === undefined) {
    return undefined;
  }
  const dados = [findById, findByFirstName, findByLastName];

  return dados.find((e) => e !== undefined);
};
const findSpeciesByEmployer = (info) => {
  const list = species.map((animal) => {
    const { name } = animal;
    if (info.responsibleFor.includes(animal.id)) {
      return name;
    }
    return '';
  }).filter((e) => e !== '');
  return list;
};
const findLocationByEmployer = (info) => {
  const list = species.map((animal) => {
    const { location } = animal;
    if (info.responsibleFor.includes(animal.id)) {
      return location;
    }
    return '';
  }).filter((e) => e !== '');
  return list;
};
const allInformation = () => {
  const allInfo = employees.map((person) => {
    const info = {};
    const { id } = person;
    const { firstName } = person;
    const { lastName } = person;
    const spp = findSpeciesByEmployer(person);
    const locations = findLocationByEmployer(person);
    info.id = id;
    info.fullName = `${firstName} ${lastName}`;
    info.species = spp;
    info.locations = locations;
    return info;
  });
  return allInfo;
};
const singleInformation = (employeer) => {
  const info = findEmployee(employeer);
  if (info === undefined) {
    throw new Error('Informações inválidas');
  }
  if (info !== undefined) {
    const newInfo = {
      id: info.id,
      fullName: `${info.firstName} ${info.lastName}`,
      species: findSpeciesByEmployer(info),
      locations: findLocationByEmployer(info),
    };
    return newInfo;
  }
};
const getEmployeesCoverage = (employeer) => {
  if (employeer === undefined) {
    return allInformation();
  }
  if (employeer.name) {
    return singleInformation(employeer);
  }
  if (employeer.id) {
    return singleInformation(employeer);
  }
};
getEmployeesCoverage();

module.exports = getEmployeesCoverage;
