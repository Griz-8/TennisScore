import marcador from './tennis.js';

test('empieza el set', () => {
  expect(marcador(0, 0)).toBe('Love-Love');
});