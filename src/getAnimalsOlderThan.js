const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const ageGroup = data.species.filter((item) => item.name === animal);
  const { residents } = ageGroup[0];
  const booleanList = residents.map((res) => res.age >= age);
  const result = booleanList.some((item) => item === false);
  if (result) {
    return false;
  }
  return true;
};
console.log(getAnimalsOlderThan('lions', 12));

module.exports = getAnimalsOlderThan;
