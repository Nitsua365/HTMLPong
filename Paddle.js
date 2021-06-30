class Paddle {
    constructor(c, can, Xpos, Ypos, l, w, col) {
        this.canvasCTX = c;
        this.canvas = can;
        this.X = Xpos;
        this.Y = Ypos;
        this.length = l;
        this.width = w;
        this.color = col;
    }

    setY(Yp) {
        this.Y = Yp;
    }

    setX(Xp) {
        this.X = Xp;
    }

    getX() {
        return this.X;
    }

    getY() {
        return this.Y;
    }

    getLength() {
        return this.length;
    }

    getWidth() {
        return this.width;
    }

    draw() {
        this.canvasCTX.beginPath();
        this.canvasCTX.rect(this.X, this.Y, this.length, this.width);
        this.canvasCTX.fillStyle = this.color;
        this.canvasCTX.fill();
        this.canvasCTX.closePath();
    }

    reset() {
        this.setY(this.canvas.height / 2 - Math.round(this.canvas.height * .15));
    }
}