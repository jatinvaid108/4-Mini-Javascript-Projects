const timeElement = document.getElementById('clock');
const dateElement = document.getElementById('date');

setInterval(function () {
    const now = new Date();

    // Get the date and time
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const time = now.toLocaleTimeString();

    // Update the content
    dateElement.innerHTML = date;
    timeElement.innerHTML = time;
}, 1000);
