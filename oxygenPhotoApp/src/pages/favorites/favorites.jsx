import { useDispatch, useSelector } from 'react-redux'
import './favorites.css'
import { getFavorite, getSearchQuery, sortFavorite, setSearchQuery } from '../../features/favorites/favoritesSlice'
import { CardItem } from '../../components/cardItem/cardItem'
import Select from 'react-select'
import { SearchBar } from '../../components/searchbar/searchbar'


export const Favorites = () => {
    const favoritePicture = useSelector(getFavorite)
    const searchQuery = useSelector(getSearchQuery);
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        if(e.value !== ''){
          dispatch(sortFavorite(e.value))
        }
    }

    const handleSearch = (query) => {
        dispatch(setSearchQuery(query));
    };

    const filteredPictures = searchQuery
  ? favoritePicture.filter((picture) =>
      picture.alt_description && picture.alt_description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : favoritePicture;


    const options = [
        { value: 'date', label: 'Date' },
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