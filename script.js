// Set the launch date for tomorrow at 9:00 PM
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 1); // Move to tomorrow
launchDate.setHours(21, 0, 0, 0); // Set to 9:00 PM

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = launchDate.getTime() - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown in the rectangular box
        document.getElementById('countdown').textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        // If the countdown is over, display launch message
        document.getElementById('countdown').textContent = "Launched!";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var sound = document.getElementById('background-sound');
    sound.play();
});

// Call the countdown function every second
setInterval(updateCountdown, 1000);


// Movies and download button logic (previous code remains unchanged)
const movies = [
    { title: "Movie 1", image: "movie1.jpg", description: "An exciting adventure film." },
    { title: "Movie 2", image: "movie2.jpg", description: "A thrilling mystery movie." },
    { title: "Movie 3", image: "movie3.jpg", description: "A heartwarming romantic story." },
    { title: "Movie 4", image: "movie4.jpg", description: "An epic sci-fi adventure." },
];

const movieContainer = document.getElementById('movieContainer');

// Create movie elements
movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie';
    movieElement.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" style="width:100%; border-radius: 5px;">
        <h4>${movie.title}</h4>
        <p>${movie.description}</p>
    `;
    movieElement.addEventListener('click', () => {
        alert(`You selected ${movie.title}. Description: ${movie.description}`);
    });
    movieContainer.appendChild(movieElement);
});
