import marcador from './tennis.js';

test('empieza el set', () => {
  expect(marcador(0, 0)).toBe('Love-Love');
});

test('jugador 1 anota', () => {
  expect(marcador(1,0)).toBe('15-Love');
});