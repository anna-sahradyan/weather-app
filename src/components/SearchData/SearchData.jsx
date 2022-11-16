import React, {useState} from 'react';
import Search from "../Search/Search";
import {API_OPENWEATHER_URL} from "../../api";



const SearchData = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const handleSearch = (searchDada) => {
        const lat = searchDada.lat;
        const lon = searchDada.lon;

        console.log(lat, lon)
        const currentWeatherFetch = fetch(`${API_OPENWEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_OPENWEATHER_KEY}&units=metric`);
        const forecastFetch = fetch(`${API_OPENWEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_OPENWEATHER_KEY}&units=metric`);
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
            <Search onSearchChange={handleSearch} currentWeather={currentWeather} forecast={forecast}/>

        </div>
    );
};

export default SearchData;