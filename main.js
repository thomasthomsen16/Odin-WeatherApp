let APIkey = "M3DMARFN86JZGTZRXDCGG36WJ";

// Get weather data from city
async function getWeather(city) {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&key=" + APIkey + "&contentType=json");
    const rawWeatherData = await response.json();
    const processedData = processRawData(rawWeatherData);
    console.log(processedData);
    return processedData;
}


// Callback function to process raw data and return needed data
function processRawData (rawData) {
    return {
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

// Get user input and run getWeather 
document.getElementById("searchBTN").addEventListener("click", ()=>{
    const userInput = document.getElementById("city").value;
    getWeather(userInput);
});