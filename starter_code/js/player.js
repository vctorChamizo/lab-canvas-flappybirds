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
    this.gravitySpeed = 0.5;

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
    if (this.gravity === null) {
      this.posY = this.posY0;
    } else if (this.gravity) {
      this.posY += this.vy;
    } else {
      this.posY -= this.vy;
    }
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === this.keys.SPACE) {
        this.posY -= this.vy;
        this.gravity = false;
      }
    });

    document.addEventListener("keyup", e => {
      if (e.keyCode === this.keys.SPACE) {
        this.posY += this.vy;
        this.gravity = true;
      }
    });
  }
}
