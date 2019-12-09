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
  framesCounter: 0,
  score: 0,

  init: function() {
    document.getElementById("start-button").style.display = "none";

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
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();

      this.clearObstacles();

      if (this.isCollision()) this.gameOver();

      if (this.framesCounter % 400 === 0) this.generateObstacles();
      if (this.framesCounter % 1000 === 0) this.score++;
      if (this.framesCounter > 1000) this.framesCounter = 0;
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

    this.obstacle = [];
    this.score = 0;
    this.framesCounter = 0;
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll: function() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(obstacle => obstacle.draw());
  },

  moveAll: function() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obstacle => obstacle.move());
  },

  generateObstacles: function() {
    this.obstacles.push(new Obstacle(this.ctx, this.width, this.height));
  },

  clearObstacles: function() {
    this.obstacles = this.obstacles.filter(
      obstacle => obstacle.posX >= -obstacle.width
    );
  },

  isCollision() {
    if (this.player.posY >= this.height - this.player.height) return true;
    return this.obstacles.some(
      obstacle =>
        this.player.posX + this.player.width >= obstacle.posX &&
        this.player.posX < obstacle.posX + obstacle.width &&
        (this.player.posY <= obstacle.heightTop ||
          this.player.posY + this.player.height >=
            this.height - obstacle.heightBottom)
    );
  },

  gameOver: function() {
    clearInterval(this.interval);
    document.getElementById("game-over-img").style.visibility = "visible";
  }
};
