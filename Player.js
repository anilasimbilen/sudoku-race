class Player {
    constructor({username, id, game = null, socket, hosting = false}) {
        this.username = username;
        this.id = id;
        this.game = game;
        this.socket = socket;
        this.hosting = hosting;
        this.finished = false;
    }
    getId() {
        return this.id;
    }
    getGame() {
        return this.game;
    }
    getSocket() {
        return this.socket;
    }
    setGame(game) {
        this.game = game;
    }
    setSocket(socket) {
        this.socket = socket;
    }
    getUsername(){
        return this.username;
    }
}
module.exports = Player;