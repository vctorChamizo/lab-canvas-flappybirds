class Obstacle {
  constructor(ctx, width, height, gameWidth, gameHeight, position) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.image = new Image();
    /*
     * true -> obstacle bottom
     * false -> obstacle top
     */
    this.position = position;

    this.posX = this.gameWidth;

    if (this.position) {
      this.posY = 0;
      this.image.src = "./images/obstacle_bottom.png";
    } else {
      this.posY = this.gameHeight;
      this.image.src = "./images/obstacle_top.png";
    }

    this.vx = 10;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  move() {
    this.posX -= this.vx;
  }
}
