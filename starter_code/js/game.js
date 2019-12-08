const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  interval: undefined,
  fps: 60,
  obstacles: [],
  playerKeys: {
    SPACE: 32
  },

  init: function() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
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
      50,
      50,
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
  },

  generateObstacles: function() {},

  gameOver: function() {
    clearInterval(this.interval);
  },

  clearObstacles: function() {}
};
