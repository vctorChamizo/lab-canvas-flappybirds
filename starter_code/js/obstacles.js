class Obstacle {
  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.opening = 75;
    this.width = 100;

    this.rateMax = this.gameHeight - 200;
    this.rateMin = 200;
    this.position = Math.floor(
      Math.random() * (this.rateMax - this.rateMin + 1) + this.rateMin
    );

    this.heightBottom = this.gameHeight - (this.position + this.opening);
    this.heightTop = this.gameHeight - (this.heightBottom + this.opening * 2);

    this.obstacleBottom = new Image();
    this.obstacleTop = new Image();

    this.generateImage();

    this.posX = this.gameWidth;
    this.posYBottom = this.gameHeight - this.heightBottom - 3;
    this.posYTop = 0;

    this.vx = 2;
  }

  generateImage() {
    this.obstacleBottom.src = "./images/obstacle_bottom.png";
    this.obstacleTop.src = "./images/obstacle_top.png";
  }

  draw() {
    this.ctx.drawImage(
      this.obstacleBottom,
      this.posX,
      this.posYBottom,
      this.width,
      this.heightBottom
    );
    this.ctx.drawImage(
      this.obstacleTop,
      this.posX,
      this.posYTop,
      this.width,
      this.heightTop
    );
  }

  move() {
    this.posX -= this.vx;
  }
}
