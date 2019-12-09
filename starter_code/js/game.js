const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  interval: undefined,
  obstacles: [],
  playerKeys: {
    SPACE: 32
  },

  init: function() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("game-over-img").style.visibility = "hidden";

    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth * 0.9;
    this.height = window.innerHeight * 0.9;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.start();
  },

  start: function() {
    this.reset();

    this.interval = setInterval(() => {
      this.clear();
      this.drawAll();
      this.moveAll();
    }, 1000 / this.fps);
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(
      this.ctx,
      this.width,
      this.height,
      "images/flappy.png",
      this.playerKeys
    );
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw();
  },

  moveAll: function() {
    this.background.move();
    this.player.move();

    if (this.player.gameOver()) this.gameOver();
  },

  generateObstacles: function() {},

  clearObstacles: function() {},

  gameOver: function() {
    clearInterval(this.interval);
    document.getElementById("start-button").style.display = "block";
    document.getElementById("game-over-img").style.visibility = "visible";
  }
};
