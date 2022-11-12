import React from 'react';
import Search from "../Search/Search";
const handleSearch = (searchDada) => {
    console.log(searchDada)
}
const SearchData = () => {
    return (
        <div>
            <Search onSearchChange={handleSearch}/>
        </div>
    );
};

export default SearchData;