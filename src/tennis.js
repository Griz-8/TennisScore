function marcador(p1, p2) {
  if (p1 === 0 && p2 === 0) {
    return 'Love-Love';
  }
  if (p1 === 1 && p2 === 0) {
    return '15-Love';
  }
  if (p1 === 0 && p2 === 1) {
    return 'Love-15';
  }
}

export default marcador;