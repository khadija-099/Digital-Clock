function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'
    ];

    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    const timeString = `${hours}<span class="colon">:</span>${minutes}<span class="colon">:</span>${seconds}`;
    document.getElementById('digitalClock').innerHTML = timeString;

    const dateString = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    document.getElementById('dateDisplay').innerHTML = dateString


    const dayString = days[now.getDay()];
    document.getElementById('dayDisplay').innerHTML = dayString

    const timeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timeZone').innerHTML = timeZoneString
}
setInterval(updateClock, 1000);
updateClock();



document.addEventListener("DOMContentLoaded", function() {
    container = document.querySelector('.clock-container');

    container.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    container.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
    });
    
    container.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 25px 45px rgba(0, 0, 0, 0.2)';
    });

});

document.addEventListener('keydown' , function(event) {
    if (event.key === 'F' || event.key === 'f') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
});






