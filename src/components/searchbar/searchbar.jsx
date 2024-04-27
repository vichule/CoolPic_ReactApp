import { useState } from 'react';
import './searchbar.css';
import { useDispatch } from 'react-redux';

export const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
        onSearch(searchQuery);
    }    

    return(
        <>
            <div className='searchContainer'>
                <button><img className='icon' src='../../assets/buscar.png'/></button>
                <div style={{marginLeft: '1em'}}>
                    <input onChange={handleSearch} className='searchbar' type="text" placeholder='Search picture...'/>
                </div>
            </div>
        </>
    )
}