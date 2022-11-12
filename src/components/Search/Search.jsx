import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {GEO_API_URL, geoApiOptions} from "../../api";

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);
    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }
    const loadOptions = (Yerevan) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${Yerevan}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data?.map((city) => {
                        return {
                            value:`${city.latitude}${city.longitude}`,
                            // label:`${city.name},${city.countryCode}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <>
            <div className={"container"}>
                <AsyncPaginate
                    debounceTimeout={600}
                    value={search}
                    onChange={handleChange}
                    placeholder={"Search for city"}
                    loadOptions={loadOptions}

                />

            </div>
        </>
    );
};

export default Search;