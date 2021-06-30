class Score {
    constructor(p1sc, p2sc, ctx, canvas) {
        this.paddle1Sc = p1sc;
        this.paddle2Sc = p2sc;
        this.ctx = ctx;
        this.canvas = canvas;
    }

    getP1Score() {
        return this.paddle1Sc;
    }

    getP2Score() {
        return this.paddle2Sc;
    }

    setP1Score(p1) {
        this.paddle1Sc = p1;
    }

    setP2Score(p2) {
        this.paddle2Sc = p2;
    }

    addP1Score() {
        this.paddle1Sc++;
        return;
    }

    addP2Score() {
        this.paddle2Sc++;
        return;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.font = '50px Arial';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(this.paddle1Sc.toString(), (this.canvas.width / 2) - 75, 75);

        this.ctx.font = '50px Arial';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(this.paddle2Sc.toString(), (this.canvas.width / 2) + 75, 75);
        this.ctx.closePath();
    }
}