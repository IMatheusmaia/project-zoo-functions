const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids[0]) {
    return [];
  }
  if (ids.length === 1) {
    const searchSpecie = data.species.find((item) => item.id === ids[0]);
    if (!searchSpecie) {
      return [];
    }
    return [searchSpecie];
  }
  if (ids.length > 1) {
    const searchSpecies = data.species.filter((itens) => ids.includes(itens.id));
    return searchSpecies;
  }
};
getSpeciesByIds();

module.exports = getSpeciesByIds;
