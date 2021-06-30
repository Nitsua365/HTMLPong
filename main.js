window.onload = () => {
    var c = document.getElementById('mainCan');
    var canvas = c.getContext('2d');
    var ball = new Ball(c, canvas, c.width / 2 , c.height / 2, 10, 10, "black");
    var paddle1 = new Paddle(canvas, c, 10, (c.height / 2 - Math.round(c.height * .15)), ball.getLength(), Math.round(c.height * .15), "black"); 
    var paddle2 = new Paddle(canvas, c, (c.width - paddle1.getLength() * 2), (c.height / 2 - Math.round(c.height * .15)), ball.getLength(),  Math.round(c.height * .15), "black");
    var scoreCount = new Score(0, 0, canvas, c, ball);
    var moveBall = new BallPhysics(2, -2, ball, c);
    var startBallEvent = false;
    // var speedtimer = new SpeedIncreaseTimer(0, 5, 2, moveBall);
    

    function ballPos() {
        console.clear();
        console.log("Position:" + "\nX Pos: " + ball.getX() + "\nY Pos: " + ball.getY());
        console.log(paddle1.getLength())
    }

    //start game
    document.getElementById("start").addEventListener("click", () => {
        startBallEvent = true;
    });

    //move paddles
    document.addEventListener("keydown", (event) => {
        var arrowKeyUp = 38;
        var arrowKeyDown = 40;
        var SDown = 83;
        var WDown = 87;
        if (startBallEvent) {
        switch (event.keyCode) {
            case arrowKeyUp:
                if (paddle2.getY() > 0) {
                    paddle2.setY(paddle2.getY() - 10);
                }
                break;
            case arrowKeyDown: 
                if (paddle2.getY() + paddle2.getLength() < c.width) {
                    paddle2.setY(paddle2.getY() + 10);
                }
                break;
            case SDown:
                if (paddle1.getY() + paddle1.getLength() < c.width) {
                    paddle1.setY(paddle1.getY() + 10);
                }
                break;
            case WDown:
                if (paddle1.getY() > 0) {
                    paddle1.setY(paddle1.getY() - 10)
                }
            }
        }
    })
    
    function loop() {
        //clear previous frame
        canvas.clearRect(0, 0, c.width, c.height);


        //draw callstacks
        ball.draw();
        paddle1.draw();
        paddle2.draw();
        scoreCount.draw();

        if (startBallEvent) {
            moveBall.move();
        }
        

        //paddle physics
        if (ball.getX() >= (paddle2.getX() - ball.getWidth() + 1) && ball.getY() >= paddle2.getY() && ball.getY() <= (paddle2.getWidth() + paddle2.getY())) {
            moveBall.invertDX();
        }
        
        if (ball.getX() <= (paddle1.getX() + paddle1.getLength()) && ball.getY() >= paddle1.getY() && ball.getY() <= (paddle1.getY() + paddle1.getWidth())) {
            moveBall.invertDX();
        }


        //score keeping
        if (ball.getX() + ball.getWidth() < paddle1.getX() && ball.getX() < paddle2.getX()) {
            startBallEvent = false;
            scoreCount.addP2Score();
            paddle1.reset();
            paddle2.reset();
            moveBall.center();
        }
        else if (ball.getX() > (paddle2.getX() + ball.getWidth()) && ball.getX() > paddle1.getX()) {
            startBallEvent = false;
            scoreCount.addP1Score();
            paddle1.reset();
            paddle2.reset();
            moveBall.center();
        }  
     
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
    setInterval(ballPos, 500);
    
    
}