import { useDispatch, useSelector } from 'react-redux'
import './favorites.css'
import { getFavorite, getSearchQuery, setSearchQuery } from '../../features/favorites/favoritesSlice'
import { CardItem } from '../../components/cardItem/cardItem'
import Select from 'react-select'
import { SearchBar } from '../../components/searchbar/searchbar'
import { useEffect, useState } from 'react'


export const Favorites = () => {
    const favoritePicture = useSelector(getFavorite)
    const searchQuery = useSelector(getSearchQuery);
    const [orderedPictures, setOrderedPicture] = useState(favoritePicture)
    const dispatch = useDispatch();

    

    const handleSearch = (query) => {
        dispatch(setSearchQuery(query));
    };

    const filteredPictures = searchQuery ? orderedPictures.filter((picture) => picture.alt_description && picture.alt_description.toLowerCase().includes(searchQuery.toLowerCase())
    ) : orderedPictures;

    useEffect(() =>{

        setOrderedPicture(favoritePicture)
    },[favoritePicture])

    const handleChange = (e) =>{
        if(e.value !== ''){
          
          let newFavoritePicture = [...filteredPictures]
          console.log(e.value)
          newFavoritePicture = newFavoritePicture.sort((a, b) => a[e.value] < b[e.value] ? 1 : -1)
          setOrderedPicture(newFavoritePicture)
        }
    }
    const options = [
        { value: 'created_at', label: 'Date' },
        { value: 'width', label: 'Width' },
        { value: 'height', label: 'Height' },
        { value: 'likes', label: 'Likes' },

    ]

    



    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="img-header background2"></div>
            <div className='btnOrder'>
                <Select options={options} 
                        className='selectContainer'
                        value={{ label: 'ORDER BY' }}
                        onChange={handleChange}
                />

            </div>
            {filteredPictures.length === 0 ? <p style={{color: 'black'}}>It seems that there are no favorite pics saved or coincidences.</p> : 
            <div className="dataContainer">
            {filteredPictures.map((picture) => <CardItem
                imgUrl = {picture.urls.regular}
                description = {picture.alt_description}
                author = {picture.user.name}
                item={picture}
                key= {picture.id} />
                )}
            </div>
            }
        </>


    )
}