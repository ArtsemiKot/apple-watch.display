class AppleWatch {
    constructor() {
        setInterval(this.doTime, 0, this.time);
        setInterval(this.doDate, 0, this.date);
    }
    time = document.querySelector('.back .time');

    doTime(time) {
        const t = new Date();
        time.innerHTML = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
    }

    date = document.querySelector('.back .date');

    doDate(date) {
        const d = new Date();
        date.innerHTML = d.toDateString();
    }
}

const appleWatch = new AppleWatch();