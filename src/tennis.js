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

  if (p1 === 1 && p2 === 1) {
    return '15-15';
  }

  if (p1 === 2 && p2 === 1) {
    return '30-15';
  }

    if (p1 === 1 && p2 === 2) {
    return '15-30';
  }

     if (p1 === 2 && p2 === 0) {
    return '30-Love';
  }
   if (p1 === 0 && p2 === 2) {
    return 'Love-30';
  }

   if (p1 === 3 && p2 === 2) {
    return '40-30';
  }

   if (p1 === 2 && p2 === 3) {
    return '30-40';
  }

  if (p1 === 3 && p2 === 3) {
    return 'Deuce';}

if (p1 === p2 + 1 && p2 >= 3) {
    return 'Advantage Player 1';}

if (p2 === p1 + 1 && p1 >= 3) {
    return 'Advantage Player 2';}

if (p1 >= 4 && p1 >= p2 + 2) {
    return 'Game for Player 1';}
    
if (p2 >= 4 && p2 >= p1 + 2) {
    return 'Game for Player 2';}
}

export default marcador;