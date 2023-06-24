const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getOldestFromFirstSpecies = (id) => {
  const employer = employees.find((person) => person.id === id);
  if (employer === undefined) {
    return 'Id de funcionário não encontrado';
  }
  const { responsibleFor } = employer;
  const ageList = species.find((animal) => animal.id === responsibleFor[0]);
  const older = ageList.residents.sort((a, b) => b.age - a.age);
  return Object.values(older[0]);
};
getOldestFromFirstSpecies();

module.exports = getOldestFromFirstSpecies;
