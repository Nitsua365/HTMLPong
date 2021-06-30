class Timer {
    constructor(set, int) {
        this.currentTime = set;
        this.interval = int;
    }

    getCurrentTime() {
        return this.currentTime;
    }

    getInterval() {
        return this.interval;
    }

    setInterval(int) {
        this.interval = int;
    }

    incrementTime() {
        this.currentTime += 1;
        console.log(this.currentTime)
    }

}