import { useState } from 'react';
import './searchbar.css';

export const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
        onSearch(searchQuery);
    }

    console.log(query)
    

    return(
        <>
            <div className='searchContainer'>
                <button><img className='icon' src='src/assets/buscar.png'/></button>
                <div style={{marginLeft: '1em'}}>
                    <input onChange={handleSearch} className='searchbar' type="text" placeholder='Search picture...'/>
                </div>
            </div>
        </>
    )
}