function showTime () {
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() +
    "Mins:" +date.getSeconds() + "Secs";
}

function showSessionExpire() {
    console.log("Activity-B: your session expire at " +showTime());
}

console.log("Activity-A: Trigerring Activity-B at " +showTime());
setTimeout(showSessionExpire, 4000);
console.log("Activity-A: Triggered Activity-B at " +showTime() + " will execute after 5 seconds");
