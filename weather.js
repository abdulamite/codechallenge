// A simple program that will tell you if you need to walk to bike to work or take a bus.


const axios = require('axios');


// Function that retuns a weather object that provides information about temp, windspeed, humidity, and precip
async function getWeather(location){
    const weather = await axios.get('https://api.darksky.net/forecast/5808727a205c20f0924b98de7f756f27/34.156068, -118.141483')
    .then(data=>{
        // return data.data.currently.temperature
        let currently = data.data.currently;
        let weatherObj = {
            temperature: currently.temperature,
            windspeed: currently.windSpeed,
            humidity: currently.humidity,
            precip: currently.precipProbability
        }
        return weatherObj;
    });
    return weather;

}

//Function to tells you if you need a jacket. Returns a boolean. Returns 1 if you should bring a jacket

async function needJacket(){
    const weather = await getWeather();
    if(weather.temperature <=55){
        console.log(`The weather will be ${weather.temperature} degrees. You should bring a jacket.`);
        return 1;
    }else{
        console.log(`The weather will be ${weather.temperature} degrees. You Will be fine without a jacket.`);
        return 0;
    }

}

needJacket();