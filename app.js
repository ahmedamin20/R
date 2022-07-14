const day = document.getElementById('d');
const hour = document.getElementById('h');
const min = document.getElementById('m');
const sec = document.getElementById('s');


const currentYear = new Date().getFullYear();

const newYearTime= new Date(`January 21 ${currentYear+1} 00:00:00`);

function updateCountdowntime() {
    const currentTime= new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor (diff / 1000 / 60 / 60 / 24);
    const h = Math.floor (diff / 1000 / 60 / 60) % 24;
    const m = Math.floor (diff / 1000 / 60 ) % 60;
    const s = Math.floor (diff / 1000) % 60
    day.innerHTML = d;
    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
}
    setInterval(updateCountdowntime, 1000);