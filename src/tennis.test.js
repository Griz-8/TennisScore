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

test('jugador 1 llega a 30 sin que jugador 2 anote', () => {
  expect(marcador(2,0)).toBe('30-Love');
});

test('jugador 2 llega a 30 sin que jugador 1 anote', () => {
  expect(marcador(0,2)).toBe('Love-30');
});

test('Jugador 1 anota, marcador 40-30', () => {
  expect(marcador(3,2)).toBe('40-30');
});

test('Jugador 2 anota, marcador 30-40', () => {
  expect(marcador(2,3)).toBe('30-40');
});

test('Empate 40-40 → Deuce', () => {
  expect(marcador(3,3)).toBe('Deuce');
});

test('Jugador 1 tiene ventaja desde Deuce', () => {
  expect(marcador(4,3)).toBe('Advantage Player 1');
});

test('Jugador 1 gana el juego desde ventaja', () => {
  expect(marcador(5,3)).toBe('Game for Player 1');
});