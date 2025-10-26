let APIkey = "M3DMARFN86JZGTZRXDCGG36WJ";

async function getWeather(city) {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&key=" + APIkey + "&contentType=json");
    const rawWeatherData = await response.json();
    console.log(rawWeatherData);
    const processedData = processRawData(rawWeatherData);
    console.log(processedData);
    return processedData;
}

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

getWeather("London");