const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se na função handlerElephants retorna o valor correto para os respectivos parâmetros passados', () => {
    expect(handlerElephants()).toBe(undefined);
    expect(handlerElephants(12)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('weight')).toBe(null);
  });
});
