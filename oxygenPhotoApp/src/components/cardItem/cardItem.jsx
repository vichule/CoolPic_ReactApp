import { useDispatch } from 'react-redux'
import './cardItem.css'
import { addFavoritePic, removeFavorite } from '../../features/favorites/favoritesSlice';

export const CardItem = ({imgUrl, description, author, item}) => {

    const dispatch = useDispatch();

    const handleFav = () => {
        if(item.isfav){
            dispatch(removeFavorite(item))
        } else {
            dispatch(addFavoritePic(item))
        }
    }




    return(
        <div className='picContainer'>
        <div>
            <img className='picImg' src={imgUrl} />
        </div>
        <div className='itemBar'>
            <div className='picText'>
                <h3>{description.length === 0 ? 'No description' : description.slice(0,28)+'...'}</h3>
                <p>Picture By: {author}</p>
            </div>
            <div className='btnContainer'>
                <button className='picBtn' onClick={handleFav} style={{padding: '0.2em'}}><img  src='src/assets/favOff.png'/></button> 
                <button className='picBtn' ><img style={{width: '2em', height: '2em'}} src='src/assets/descargar.png'/></button>
            </div>
        </div>
    </div>
    )
    
}