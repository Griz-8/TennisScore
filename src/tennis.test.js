import marcador from './tennis.js';

test('empieza el set', () => {
  expect(marcador(0, 0)).toBe('Love-Love');
});

test('jugador 1 anota', () => {
  expect(marcador(1,0)).toBe('15-Love');
});

test('jugador 2 anota primero', () => {
  expect(marcador(0,1)).toBe('Love-15');
});

test('el otro jugador anota', () => {
  expect(marcador(1,1)).toBe('15-15');
});

test('jugador 1 llega a 30', () => {
  expect(marcador(2,1)).toBe('30-15');
});

test('jugador 2 llega a 30', () => {
  expect(marcador(1,2)).toBe('15-30');
});