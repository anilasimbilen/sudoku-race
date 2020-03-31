const SudokuGenerator = require("js-sudoku-generator").SudokuGenerator;

const GAME_MODES = Object.freeze({
    "easy": 0,
    "medium": 1,
    "hard": 2
})

class Sudoku {
    constructor({mod}) {
        SudokuGenerator.generate(1);
        if(mod) {
            this.default = GAME_MODES[mod.toLowerCase()];
        } else {
            this.default = 0;
        }
        this.board = SudokuGenerator.generatedBoards[0];
    }
    getSolution() {
        return this.board.board;
    }
    getDefault() {
        return this.board.getSheet(this.default);
    }
    getEasy() {
        return this.board.getSheet(0);
    }
    getMedium() {
        return this.board.getSheet(1);
    }
    getHard() {
        return this.board.getSheet(2);
    }
    getCell({i=0,j=0}) {
        return this.board[i][j];
    }
    isValid({i = 0, j = 0, value = 0}) {
        console.log(i,j,this.getDefault());
        return this.getDefault()[i][j] === value;
    }
    isValidBoard(board) {
        console.log(this.board);
        for(let i in this.board.board) {
            for(let j in this.board.board[i]) {
                if(board[i][j] !== this.board.board[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
}
module.exports = Sudoku;