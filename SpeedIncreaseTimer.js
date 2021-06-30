class SpeedIncreaseTimer extends Timer {
    constructor(set, int, mult, ballP) {
        super(set, int);
        this.speedMultiplier = mult;
        this.ballPhysics = ballP;
        setInterval(super.incrementTime, 1000);
    }


    stopTimer() {
        clearInterval();
    }

    getSpeedMultiplier() {
        return this.speedMultiplier;
    }

    setSpeedMultiplier(SM) {
        this.speedMultiplier = SM;
    }
}