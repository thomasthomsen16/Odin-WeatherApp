let APIkey = "M3DMARFN86JZGTZRXDCGG36WJ";

async function getWeather(city) {
    const response = await fetch (    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+city+"?unitGroup=metric&key="+APIkey+"&contentType=json");
    const rawWeatherData = await response.json();
    console.log(rawWeatherData);
}

getWeather("London");