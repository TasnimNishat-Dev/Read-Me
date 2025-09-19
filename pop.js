// Replace all feather icons
feather.replace();

// Select elements
const locationButton = document.querySelector('.location-button');
const locationText = document.querySelector('.location');
const weatherTemp = document.querySelector('.weather-temp');
const weatherDesc = document.querySelector('.weather-desc');
const precipitationValue = document.querySelector('.precipitation .value');
const humidityValue = document.querySelector('.humidity .value');
const windValue = document.querySelector('.wind .value');
const weekItems = document.querySelectorAll('.week-list li');

// Example weather data generator
function getRandomWeather() {
    const conditions = [
        { icon: "sun", temp: 30, desc: "Sunny" },
        { icon: "cloud", temp: 22, desc: "Cloudy" },
        { icon: "cloud-rain", temp: 18, desc: "Rainy" },
        { icon: "cloud-snow", temp: 5, desc: "Snowy" },
        { icon: "cloud-lightning", temp: 25, desc: "Stormy" }
    ];
    const index = Math.floor(Math.random() * conditions.length);
    return conditions[index];
}

// Update main weather info
function updateMainWeather() {
    const weather = getRandomWeather();
    weatherTemp.textContent = weather.temp + "°C";
    weatherDesc.textContent = weather.desc;
    precipitationValue.textContent = Math.floor(Math.random() * 100) + " %";
    humidityValue.textContent = Math.floor(Math.random() * 100) + " %";
    windValue.textContent = Math.floor(Math.random() * 50) + " km/h";
    // Update main icon
    const mainIcon = document.querySelector('.weather-icon');
    mainIcon.setAttribute('data-feather', weather.icon);
    feather.replace(); // Refresh icons
}

// Update weekly forecast
function updateWeeklyForecast() {
    weekItems.forEach(item => {
        const weather = getRandomWeather();
        const icon = item.querySelector('.day-icon');
        const temp = item.querySelector('.day-temp');
        icon.setAttribute('data-feather', weather.icon);
        temp.textContent = weather.temp + "°C";
    });
    feather.replace();
}

// Initial weather update
updateMainWeather();
updateWeeklyForecast();

// Handle "Change Location" button
locationButton.addEventListener('click', () => {
    const newLocation = prompt("Enter a new city and country (e.g., London):");
    if (newLocation && newLocation.trim() !== "") {
        locationText.textContent = newLocation;
        updateMainWeather();
        updateWeeklyForecast();
    }
});
