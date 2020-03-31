const Sudoku = require("./Sudoku");

class Game {
    constructor(fields = {roomName: "Game", id: 0, mod: "easy"}) {
        this.players = [];
        this.sudoku = new Sudoku(fields.mod);
        this.roomName = fields.roomName;
        this.id = fields.id;
        this.isStarted = false;
    }
    addPlayer(player) {
        this.players.push(player);
    }
    getPlayers() {
        return this.players;
    }
    getSudoku() {
        return this.sudoku;
    }
}
module.exports = Game;