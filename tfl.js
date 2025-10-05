let totalSeconds = 3 * 24 * 60 * 60; 

function updateTimer() {
    const timerfl = document.getElementById("timerfl");

    let days = Math.floor(totalSeconds / (24 * 60 * 60));
    let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    timerfl.textContent =
        String(days).padStart(2, '0') + " : " +
        String(hours).padStart(2, '0') + " : " +
        String(minutes).padStart(2, '0') + " : " +
        String(seconds).padStart(2, '0');

    if (totalSeconds > 0) {
        totalSeconds--;
    }
}

updateTimer();
setInterval(updateTimer, 1000);