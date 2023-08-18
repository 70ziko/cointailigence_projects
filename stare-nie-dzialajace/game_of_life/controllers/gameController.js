const gameService = require('../services/gameService');

class GameController {
  constructor() {
    this.gameService = new gameService();
  }

  getGame(req, res) {
    const game = this.gameService.getGame();
    res.json(game);
  }

  updateGame(req, res) {
    const { cells } = req.body;
    this.gameService.updateGame(cells);
    res.status(204).send();
  }

  resetGame(req, res) {
    this.gameService.resetGame();
    res.status(204).send();
  }
}

module.exports = new GameController();
