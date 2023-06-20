const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  try {
    const findManager = employees.find((person) => person.id === id);
    if (!findManager) {
      throw new Error('O id inserido não é de um funcionário!');
    }
    if (findManager.managers.length === 0) {
      return true;
    }
    const manager = employees.some((colab) => colab.managers.includes(findManager.id));
    if (manager) {
      return true;
    }
    return false;
  } catch (erro) {
    return erro.message;
  }
};
isManager();

const verifyManager = (id) => {
  const { employees } = data;
  const manager = employees.find((gerente) => isManager(id) && gerente.id === id);
  return manager;
};

const getRelatedEmployees = (managerId) => {
  const { employees } = data;
  const manager = verifyManager(managerId);
  if (!manager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colabs = employees.filter((colab) => colab.managers.some((e) => e === manager.id));
  const list = colabs.map((nome) => {
    const { firstName, lastName } = nome;
    return `${firstName} ${lastName}`;
  });
  return list;
};
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
