import { useState } from 'react';
import './searchbar.css';

export const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    const handleDelete = () => {
        
    }
    console.log(query)

    return(
        <>
            <div className='searchContainer'>
                <button><img className='icon' src='src/assets/buscar.png'/></button>
                <div style={{marginLeft: '1em'}}>
                    <input onChange={handleSearch} className='searchbar' type="text" placeholder='Search picture...'/><button className='btnErase' onClick={handleDelete}>X</button>
                </div>
            </div>
        </>
    )
}