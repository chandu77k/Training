import React, { useState } from 'react';

const Search = ({ data, setData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const name = event.target.value;
        setSearchTerm(name);
        const filteredData = data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
        setData(filteredData);
    };

    return (
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
    );
};

export default Search;