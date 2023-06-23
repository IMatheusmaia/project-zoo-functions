const data = require('../data/zoo_data');

const entrants = [
  { name: 'Maria Costa', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrant) => {
  const ageGroup = {};
  entrant.forEach((visit) => {
    if (visit.age < 18) {
      const criança = entrant.filter((e) => e.age < 18).length;
      ageGroup.child = criança;
    }
    if (visit.age >= 18 && visit.age < 50) {
      const adulto = entrant.filter((e) => e.age >= 18 && e.age < 50).length;
      ageGroup.adult = adulto;
    }
    if (visit.age >= 50) {
      const idoso = entrant.filter((e) => e.age >= 50).length;
      ageGroup.senior = idoso;
    }
  });
  return ageGroup;
};

const calculateEntry = (entrant) => {
  if (entrant === undefined) {
    return 0;
  }
  const visits = countEntrants(entrant);
  if (visits.child === undefined) {
    visits.child = 0;
  }
  if (visits.adult === undefined) {
    visits.adult = 0;
  }
  if (visits.senior === undefined) {
    visits.senior = 0;
  }
  const total = (visits.child * 20.99) + (visits.adult * 49.99) + (visits.senior * 24.99);
  return Number(total.toFixed(2));
};
calculateEntry(entrants);

module.exports = { calculateEntry, countEntrants };
