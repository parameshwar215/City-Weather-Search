// src/services/weatherService.js
import axios from 'axios';

//const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//const BASE_URL = 'https://api.weatherapi.com/v1';
const url=`https://api.weatherapi.com/v1/forecast.json?key=baf1867328ec486cbf691435251105&q=Zahirabad&aqi=yes`
export const fetchWeather = async (city) => {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=baf1867328ec486cbf691435251105&q=${city}&aqi=yes`)
    // const response = await axios.get(`${BASE_URL}/current.json`, {
    //     // params: {
    //     //     key: API_KEY,
    //     //     q: city,
    //     //     aqi: 'yes'
    //     // }
    // });
    return response.data;
};
