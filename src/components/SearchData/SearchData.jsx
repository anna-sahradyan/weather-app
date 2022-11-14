import React, {useState} from 'react';
import Search from "../Search/Search";
import {API_OPENWEATHER_URL} from "../../api";


const SearchData = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const handleSearch = (searchDada) => {
        const [lat, lon] = searchDada.value.split(" ");
        const currentWeatherFetch = fetch(`${API_OPENWEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_OPENWEATHER_KEY}`);
        const forecastFetch = fetch(`${API_OPENWEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_OPENWEATHER_KEY}`);
        Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
            const weatherRes = await response[0].json();
            const forecastRes = await response[1].json();

        })

    }
    return (
        <div>
            <Search onSearchChange={handleSearch}/>
        </div>
    );
};

export default SearchData;