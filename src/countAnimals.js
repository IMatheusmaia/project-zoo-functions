const data = require('../data/zoo_data');

const countAllAnimals = () => {
  const { species } = data;
  const object = { };
  species.forEach((specie) => {
    object[specie.name] = specie.residents.length;
  });
  return object;
};
const countBySpecie = (animal) => {
  const { species } = data;
  const specie = species.find((spp) => spp.name === animal.species);
  // const { name } = specie;
  const { residents } = specie;
  // const object = {};
  // object[name] = residents.length;
  return residents.length;
};
const countBySex = (animal) => {
  const { species } = data;
  const specie = species.find((spp) => spp.name === animal.species);
  // const { name } = specie;
  const { residents } = specie;
  const female = residents.filter((res) => res.sex === animal.sex);
  // const object = {};
  // object[name] = female.length;
  return female.length;
};
const countAnimals = (animal) => {
  if (animal === undefined) {
    return countAllAnimals();
  }
  if (animal.species && animal.sex) {
    return countBySex(animal);
  }
  if (animal.species) {
    return countBySpecie(animal);
  }
};
console.log(countAnimals());

module.exports = countAnimals;
