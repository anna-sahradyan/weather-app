import React, {useState} from 'react';
import Search from "../Search/Search";
import {API_OPENWEATHER_URL} from "../../api";


const SearchData = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const handleSearch = (searchDada) => {
        const lat = searchDada.value.split("");
        const lon = searchDada.value.split("");
        console.log(searchDada)
        const currentWeatherFetch = fetch(`${API_OPENWEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_OPENWEATHER_KEY}`);
        const forecastFetch = fetch(`${API_OPENWEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_OPENWEATHER_KEY}`);
        Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
            const weatherRes = await response[0].json();
            const forecastRes = await response[1].json();
            setCurrentWeather({city: searchDada.label, ...weatherRes});
            setForecast({city: searchDada.label, ...forecastRes});
        })
            .catch((err) => console.log(err))

    }
    console.log(currentWeather);
    console.log(forecast);


    return (
        <div>
            <Search onSearchChange={handleSearch} currentWeather={currentWeather}/>
        </div>
    );
};

export default SearchData;