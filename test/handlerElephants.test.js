const { getElephants, averageAge, computeData, handlerElephants } = require('../src/handlerElephants');

const elephantObj = getElephants();

describe('Testes da função HandlerElephants', () => {
  it('verificando se a função getElephants retorna o objeto correto', () => {
    expect(getElephants()).toEqual(elephantObj);
  });
  it('Verifica se na função computeData retorna o valor correto para os respectivos parâmetros passados', () => {
    expect(computeData('count', elephantObj)).toBe(4);
    expect(computeData('names', elephantObj)).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(computeData('averageAge', elephantObj)).toBeCloseTo(10.5);
    expect(computeData('sex', elephantObj)).toBe(null);
  });
  it('Verifica se na função handlerElephants retorna o valor correto para os respectivos parâmetros passados', () => {
    expect(handlerElephants()).toBe(undefined);
    expect(handlerElephants(12)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('weight')).toBe(null);
  });
  it('Verifica se a função average retorna o valor correto', () => {
    expect(averageAge(elephantObj)).toBeCloseTo(10.5);
  });
});
