class Player {
  constructor(ctx, width, height, image, keys) {
    this.ctx = ctx;

    this.gameWidth = width;
    this.gameHeight = height;

    this.image = new Image();
    this.image.src = image;

    this.keys = keys;

    this.width = 50;
    this.height = 50;
    this.posX = this.gameWidth * 0.1;
    this.posY0 = this.gameHeight / 2;
    this.posY = this.posY0;

    this.vy = 1;
    this.gravity = null;
    this.gravitySpeed = 0.4;

    this.setListeners();
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
    if (this.posY > 0 && this.posY < this.gameHeight - this.height) {
      this.posY += this.vy;
      this.vy += this.gravitySpeed;
    } else if (this.posY < 0) {
      this.posY = this.posY0;
      this.vy = 0;
    } else this.posY = this.gameHeight - this.height;
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === this.keys.SPACE) {
        this.posY -= 25;
        this.vy = -8;
      }
    });
  }
}
