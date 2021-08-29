'use strict';

function chess(boardSize) {
    boardSize = +boardSize
    boardSize = boardSize ?? 0
    if (boardSize <= 1)
        return null;
    let board="";
    let symbols = ['*', ' ', '*']
    let boardStrings = ['', '']
    for (let i=0; i < boardSize; i++) {
        boardStrings[0] += symbols[i%2]
        boardStrings[1] += symbols[1-i%2]
    }
    boardStrings[0] += '\n'
    boardStrings[1] += '\n'
    for (let i=0; i < boardSize; i++)
        board += boardStrings[i%2]
    return board;
}
