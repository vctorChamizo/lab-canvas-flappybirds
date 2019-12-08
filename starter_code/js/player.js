class Player {
  constructor(ctx, width, height, image, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;

    this.posX = 200;
    this.posY = 300;
    this.posY0 = 300;
    this.vy = 1;
    this.gravity = true;
    this.gravitySpeed = 0.4;
    this.keys = keys;

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
    if (this.posY <= this.posY0) {
      this.posY += this.vy;
      this.vy += this.gravitySpeed;
    } else {
      this.vy = 1;
      this.posY = this.posY0;
    }
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.SPACE:
            this.posY -= this.vy;
            this.vy -= 10;
          /*if (this.posY >= this.posY0) {
            this.posY -= this.vy;
            this.vy -= 10;
          }*/
          break;

        default:
          break;
      }
    });
  }
}
