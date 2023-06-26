const data = require('../data/zoo_data');

const { species } = data;

const mapAllAnimals = () => {
  const regions = { NE: null, NW: null, SE: null, SW: null };
  const listRegions = Object.keys(regions);
  listRegions.map((region) => {
    const animals = species.filter((animal) => animal.location === region);
    regions[region] = animals.map((specie) => {
      const { name } = specie;
      return name;
    });
    return animals;
  });
  return regions;
};
const includesAnimalName = () => {
  const all = mapAllAnimals();
  const animalsFiltred = Object.keys(all).map((region) => {
    all[region] = species.filter((animal) => animal.location === region);
    return all;
  });
  const [animals] = animalsFiltred;
  Object.keys(animals).map((region) => {
    const names = animals[region].map((animal) => {
      const { name } = animal;
      const { residents } = animal;
      const obj = {};
      obj[name] = residents.map((spp) => spp.name);
      return obj;
    });
    animals[region] = Array.from(names);
    return names;
  });
  return animals;
};
const sortAnimalName = () => {
  const all = mapAllAnimals();
  const animalsFiltred = Object.keys(all).map((region) => {
    all[region] = species.filter((animal) => animal.location === region);
    return all;
  });
  const [animals] = animalsFiltred;
  Object.keys(animals).map((region) => {
    const names = animals[region].map((animal) => {
      const { name } = animal;
      const { residents } = animal;
      const obj = {};
      obj[name] = residents.map((spp) => spp.name).sort();
      return obj;
    });
    animals[region] = Array.from(names);
    return names;
  });
  return animals;
};
const bySexAnimalName = (sex) => {
  const all = mapAllAnimals();
  const animalsFiltred = Object.keys(all).map((region) => {
    all[region] = species.filter((animal) => animal.location === region);
    return all;
  });
  const [animals] = animalsFiltred;
  Object.keys(animals).map((region) => {
    const names = animals[region].map((animal) => {
      const { name } = animal;
      const { residents } = animal;
      const obj = {};
      obj[name] = residents.filter((spp) => spp.sex === sex).map((spp) => spp.name);
      return obj;
    });
    animals[region] = Array.from(names);
    return names;
  });
  return animals;
};
const bySexAnimalNameSorted = (sex) => {
  const all = mapAllAnimals();
  const animalsFiltred = Object.keys(all).map((region) => {
    all[region] = species.filter((animal) => animal.location === region);
    return all;
  });
  const [animals] = animalsFiltred;
  Object.keys(animals).map((region) => {
    const names = animals[region].map((animal) => {
      const { name } = animal;
      const { residents } = animal;
      const obj = {};
      obj[name] = residents.filter((spp) => spp.sex === sex).map((spp) => spp.name).sort();
      return obj;
    });
    animals[region] = Array.from(names);
    return names;
  });
  return animals;
};
const firstFlow = (options) => {
  if (options.sex === undefined && options.sorted === undefined) {
    return includesAnimalName();
  }
  if (options.sex !== undefined && options.sorted === undefined) {
    return bySexAnimalName(options.sex);
  }
};
const secondFlow = (options) => {
  if (options.sex === undefined && options.sorted !== undefined) {
    return sortAnimalName();
  }
  if (options.sex !== undefined && options.sorted !== undefined) {
    return bySexAnimalNameSorted(options.sex);
  }
};

const getAnimalMap = (options) => {
  if (options === undefined || options.includeNames === undefined) {
    return mapAllAnimals();
  }
  const first = firstFlow(options);
  const second = secondFlow(options);
  if (first !== undefined) {
    return firstFlow(options);
  }
  if (second !== undefined) {
    return secondFlow(options);
  }
};
console.log(getAnimalMap({ includeNames: true, sorted: true }));

module.exports = getAnimalMap;
