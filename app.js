const time = document.querySelector('.back .time');

function doTime(time) {
    const t = new Date();
    time.innerHTML = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
}

setInterval(doTime, 0, time);

const date = document.querySelector('.back .date');

function doDate(date) {
    const d = new Date();
    date.innerHTML = d.toDateString();
}

setInterval(doDate, 0, date);