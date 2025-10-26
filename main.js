let APIkey = "M3DMARFN86JZGTZRXDCGG36WJ";

// Get weather data from city
async function getWeather(city) {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&key=" + APIkey + "&contentType=json");
    const rawWeatherData = await response.json();
    const processedData = processRawData(rawWeatherData);
    console.log(rawWeatherData);
    console.log(processedData);
    return processedData;
}

// Callback function to process raw data and return needed data
function processRawData (rawData) {
    return {
        city: rawData.resolvedAddress,
        temperature: rawData.currentConditions.temp,
        feelsLikeTemp: rawData.currentConditions.feelslike,
        precipe: rawData.currentConditions.precip,
        conditions: rawData.currentConditions.conditions,
        windgust: rawData.currentConditions.windgust,
        windspeed: rawData.currentConditions.windspeed,
        humidity: rawData.currentConditions.humidity,
        sunrise: rawData.currentConditions.sunrise,
        sunset: rawData.currentConditions.sunset,
        uvIndex: rawData.currentConditions.uvindex,
        weatherDescription: rawData.description
    }
}

// Function to display weather data on the page
function displayWeatherData(data) {
    document.getElementById("cityName").textContent = data.city;
    document.getElementById("conditions").textContent = `Conditions: ${data.conditions}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.temperature}°C`;
    document.getElementById("feelsLikeTemp").textContent = `Feels Like: ${data.feelsLikeTemp}°C`;
    document.getElementById("precipe").textContent = `Precipitation: ${data.precipe}mm`;
    document.getElementById("windgust").textContent = `Wind Gust: ${data.windgust} km/h`;
    document.getElementById("windspeed").textContent = `Wind Speed: ${data.windspeed} km/h`;
    document.getElementById("humidity").textContent = `Humidity: ${data.humidity}%`;
    document.getElementById("sunrise").textContent = `Sunrise: ${data.sunrise}`;
    document.getElementById("sunset").textContent = `Sunset: ${data.sunset}`;
    document.getElementById("uvIndex").textContent = `UV Index: ${data.uvIndex}`;
    document.getElementById("weatherDescription").textContent = data.weatherDescription;
}

// Get user input and run getWeather 
document.getElementById("searchBTN").addEventListener("click", async () => {
    const userInput = document.getElementById("city").value;
    const weatherData = await getWeather(userInput);
    displayWeatherData(weatherData);
});