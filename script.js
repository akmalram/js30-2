window.onload = function() {
    let secondsHand = document.querySelector('.hand-seconds');
    let minutesHand = document.querySelector('.hand-minutes');
    let hoursHand = document.querySelector('.hand-hours');
    
    function runDate() {
        const now = new Date();

        let seconds = now.getSeconds();
        let secondDegrees = (seconds / 60) * 360 + 90;

        let minutes = now.getMinutes();
        let minuteDegrees = (minutes / 60) * 360 + 90;

        let hours = now.getHours();
        let hourDegrees = (hours / 24) * 360 + 90;

        minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;
        hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
        secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
    }

    setInterval(runDate, 1000);
}