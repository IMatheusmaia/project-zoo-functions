const getOpeningHours = require('../src/getOpeningHours');

const board = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};
const closedMessage = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função ao não receber nenhum parâmetro, retorna o objeto com todos os dias e horários disponíveis', () => {
    expect(getOpeningHours()).toEqual(board);
  });
  it('Verifica se a função ao receber parâmetros válidos,retorna a mensagem correta', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closedMessage);
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closedMessage);
  });
  it('Verifica se a função ao receber um dia da semana inválido, retorna a mensagem correta', () => {
    expect(() => getOpeningHours('Sexta-Feira', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Verifica se a função ao receber abreviação de horário inválido, retorna a mensagem correta', () => {
    expect(() => getOpeningHours('Friday', '09:00-KM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se a função ao receber o horário no formato inválido, retorna a mensagem correta', () => {
    expect(() => getOpeningHours('Friday', 'A9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Verifica se a função ao receber os minutos no formato inválido, retorna a mensagem correta', () => {
    expect(() => getOpeningHours('Friday', '09:XX-AM')).toThrow('The minutes should represent a number');
  });
  it('Verifica se a função ao receber horas e minutos no formato inválido, retorna as mensagens correta', () => {
    expect(() => getOpeningHours('Friday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Friday', '10:90-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Verifica se fornecer horário limite de abertura e fechamento, recebe a mensagem correta', () => {
    expect(getOpeningHours('Friday', '10:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Friday', '08:00-PM')).toBe(closedMessage);
  });
});
