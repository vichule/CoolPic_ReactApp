import { useSelector } from 'react-redux'
import './favorites.css'
import { getFavorite } from '../../features/favorites/favoritesSlice'
import { CardItem } from '../../components/cardItem/cardItem'
import { useEffect, useState } from 'react'
import { CardItemFav } from '../../components/cardItemFav/cardItemFav'
import Select from 'react-select'


export const Favorites = () => {
    const favoritePicture = useSelector(getFavorite)
    const [favPics, setFavPics] = useState(favoritePicture)
    const [orderBy, setOrderBy] = useState('')

    const handleChange = (e) =>{
        setOrderBy(e.value)
    }

    

    const options = [
        { value: 'date', label: 'Date' },
        { value: 'width', label: 'Width' },
        { value: 'height', label: 'Height' },
        { value: 'likes', label: 'Likes' },

    ]

    useEffect(() => {
        const orderPics = [...favPics];
    
        switch (orderBy) {
          case "width":
            orderPics.sort((a, b) => a.width - b.width);
            break;
          case "height":
            orderPics.sort((a, b) => a.height - b.height);
            break;
          case "likes":
            orderPics.sort((b, a) => a.likes - b.likes);
            break;
          case "date":
            orderPics.sort((b, a) => parseInt(a.created_at) - parseInt(b.created_at));
            break;
          default:
            break;
        }
        setFavPics(orderPics);
      }, [orderBy]);

      


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
            {favPics.length === 0 ? <p>It seems that there are no favorite pics saved.</p> : 
            <div className="dataContainer">
            {favPics.map((picture) => <CardItem
                imgUrl = {picture.urls.thumb}
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