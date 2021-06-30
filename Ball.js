class Ball {
    constructor(can, ctx, Xpos, Ypos, l, w, col) {
        this.X = Xpos;
        this.Y = Ypos;
        this.length = l;
        this.width = w;
        this.c = can;
        this.canvas = ctx;
        this.color = col;
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
    
    getColor() {
        return this.color;
    }

    setX(Xpos) {
        this.X = Xpos;
    }

    setY(Ypos) {
        this.Y = Ypos;
    }
    
    setColor(col) {
        this.color = col;
    }

    draw() {
        this.canvas.beginPath();
        this.canvas.rect(this.X, this.Y, this.length, this.width);
        this.canvas.fillStyle = this.color;
        this.canvas.fill();
        this.canvas.closePath();
    }
}