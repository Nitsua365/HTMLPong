class BallPhysics {
    constructor(x, y, b, can) {
        this.dx = x;
        this.dy = y;
        this.ball = b;
        this.canvas = can;
    }

    invertDX() {
        this.dx = this.dx * -1;
    }

    invertDY() {
        this.dy = this.dy * -1;
    }

    stop() {
        this.dx = 0;
        this.dy = 0;
    }

    getDX() {
        return this.dx;
    }

    getDY() {
        return this.dy;
    }

    setDX(X) {
        dx = X;
    }

    setDY(Y) {
        dy = Y;
    }


    move() {

        if ((this.ball.getY()) >= (this.canvas.height - this.ball.getWidth()) || this.ball.getY() <= 0) {
            this.dy = this.dy * -1;
        }

        this.ball.setX(this.ball.getX() + (this.dx));
        this.ball.setY(this.ball.getY() + (this.dy));
    }

    center() {
        this.ball.setX(this.canvas.width / 2);
        this.ball.setY(this.canvas.height / 2);
    }

    
}