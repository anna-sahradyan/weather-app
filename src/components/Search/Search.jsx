import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {GEO_API_URL, geoApiOptions} from "../../api";
import CurrentWeather from "../../Current-weather/current-weather";

const Search = ({onSearchChange, currentWeather}) => {
    const [search, setSearch] = useState(null);
    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }
    const loadOptions = (inputValue) => {
        return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data?.map((city) => {
                        // console.log(city.latitude,city.longitude)
                        return {
                            lat: `${city.latitude}`,
                            lon: `${city.longitude}`,
                            label: `${city.name}${city.countryCode}`
                        }

                    })
                }
                console.log(inputValue)

            })
            .catch(err => console.error(err));
    }
    return (
        <>
            <div className={"container"}>
                <AsyncPaginate style={{color: "red"}}
                               debounceTimeout={600}
                               value={search}
                               onChange={handleChange}
                               placeholder={"Search for city"}
                               loadOptions={loadOptions}

                />
                {currentWeather && <CurrentWeather data={currentWeather}/>}
            </div>
        </>
    );
};

export default Search;