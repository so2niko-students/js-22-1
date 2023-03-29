function checkTicTacToe0(board) {
    let isZero = false;
    for (let i = 0; i < 3; i++) {
      const row = board[i][0] * board[i][1] * board[i][2];
      const column = board[0][i] * board[1][i] * board[2][i];
      if(!(row * column)) isZero = true;
      if(row == 1 || row == 8) return row ** (1 / 3);
      if(column == 1 || column == 8) return column ** (1 / 3);
    }
  
    const diag1 = board[0][0] * board[1][1] * board[2][2];
    const diag2 = board[0][2] * board[1][1] * board[2][0];
    if(!(diag1 * diag2)) isZero = true;
    if(diag1 == 1 || diag1 == 8) return diag1 ** (1 / 3);
    if(diag2 == 1 || diag2 == 8) return diag2 ** (1 / 3);
  
    return isZero ? 0 : -1;
  }
  function checkTicTacToe1(board) {
    const checks = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const board1D = board.flat();
    let isZero = false;
    for (let i = 0; i < checks.length; i += 1) {
      const line = board1D[checks[i][0]] * board1D[checks[i][1]] * board1D[checks[i][2]];
      if(!line) isZero = true;
      if(line == 1 || line == 8) return line ** (1 / 3);
    }

    return isZero ? 0 : -1;
  }
  function checkTicTacToe(board) {
    const boardStr = board.join().replaceAll(',', ''); //'001012210'
    for(let i = 1; i < 3; i += 1){
        const regLine = new RegExp(`^${ i }{3}|^.{3}${ i }{3}|${ i }{3}$|.{0,2}${ i }.{2}${ i }.{2}${ i }.{0,2}|${ i }.{3}${ i }.{3}${ i }|.{2}${ i }.${ i }.${ i }.{2}`);
        if(regLine.test(boardStr)) return i;
    }

    return boardStr.includes(0) ? 0 : -1;

    /*
    111000000
    000111000
    000000111
    100100100
    010010010
    001001001
    100010001
    001010100
    */
}
  console.log(
    checkTicTacToe([
      [0, 0, 1],
      [0, 1, 2],
      [2, 1, 0],
    ])
  );
  console.log(
    checkTicTacToe([
      [1, 1, 1],
      [0, 1, 2],
      [2, 0, 0],
    ])
  );
  console.log(
    checkTicTacToe([
      [0, 0, 1],
      [2, 2, 2],
      [2, 1, 0],
    ])
  );
  console.log(
    checkTicTacToe([
      [1, 0, 1],
      [0, 1, 2],
      [2, 1, 1],
    ])
  );
  console.log(
    checkTicTacToe([
      [0, 0, 2],
      [0, 1, 2],
      [2, 1, 2],
    ])
  );
  console.log(
      checkTicTacToe([
        [1, 0, 2],
        [0, 2, 0],
        [2, 1, 2],
      ])
    );