const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const days = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday:
  { officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'] },
  Friday:
  { officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'] },
  Saturday:
  { officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((animal) =>
      animal.availability.includes('Saturday')).map((animal) => animal.name) },
  Sunday:
  { officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'] },
  Monday:
  { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
};
const searchByDay = (day) => {
  const currentDay = days[day];
  const scheduleDay = {};
  if (currentDay !== undefined) {
    scheduleDay[day] = currentDay;
    return scheduleDay;
  }
};

const getSchedule = (scheduleTarget) => {
  const searchByName = species.find((animal) => animal.name === scheduleTarget);
  const day = searchByDay(scheduleTarget);
  if (searchByName !== undefined) {
    return searchByName.availability;
  }
  if (day !== undefined) {
    return day;
  }
  return days;
};
console.log(getSchedule());

module.exports = getSchedule;
