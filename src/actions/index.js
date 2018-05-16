import axios from 'axios';


const API_KEY = '7330ac9a49aa0efaf1e783f25f5bea70';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city)
{
    //debugger;
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    console.log('Request:',request);

    return {
        type:FETCH_WEATHER,
        payload:request
    };
}