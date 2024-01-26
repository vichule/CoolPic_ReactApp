import { useDispatch, useSelector } from 'react-redux'
import './favorites.css'
import { getFavorite, sortFavorite } from '../../features/favorites/favoritesSlice'
import { CardItem } from '../../components/cardItem/cardItem'
import { useEffect, useState } from 'react'
import Select from 'react-select'


export const Favorites = () => {
    const favoritePicture = useSelector(getFavorite)
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        if(e.value !== ''){
          dispatch(sortFavorite(e.value))
        }
    }


    const options = [
        { value: 'date', label: 'Date' },
        { value: 'width', label: 'Width' },
        { value: 'height', label: 'Height' },
        { value: 'likes', label: 'Likes' },

    ]



    return (
        <>
            <div className="img-header background2"></div>
            <div className='btnOrder'>
                <Select options={options} 
                        className='selectContainer'
                        value={{ label: 'ORDER BY' }}
                        onChange={handleChange}
                />

            </div>
            {favoritePicture.length === 0 ? <p style={{color: 'black'}}>It seems that there are no favorite pics saved.</p> : 
            <div className="dataContainer">
            {favoritePicture.map((picture) => <CardItem
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