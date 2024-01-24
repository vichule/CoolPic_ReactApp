import { useSelector } from 'react-redux'
import './favorites.css'
import { getFavorite } from '../../features/favorites/favoritesSlice'
import { CardItem } from '../../components/cardItem/cardItem'


export const Favorites = () => {
    const favoritePicture = useSelector(getFavorite)
    const [favPics, setFavPics] = (favoritePicture)
    const [orderBy, setOrderBy] = ('')

    console.log(favPics)

    return (
        <>
            <img className="img-header" src="src/assets/nadine-shaabana-VA9xSQekC8c-unsplash.jpg"/>
            <div>
                Order By
            </div>
            {favPics.length === 0 ? <p>It seems that there are no favorite pics saved.</p> : 
            <div className="dataContainer">
            {favPics.map((picture) => <CardItem
                imgUrl = {picture.urls.thumb}
                description = {picture.alt_description}
                author = {picture.user.name} />
                )}
            </div>
            }
        </>


    )
}