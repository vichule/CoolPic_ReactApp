import { useDispatch, useSelector } from 'react-redux'
import './cardItemFav.css'
import { addFavoritePic, removeFavorite, getFavorite } from '../../features/favorites/favoritesSlice';
import { useState } from 'react';
import Swal from 'sweetalert2';



export const CardItemFav = ({imgUrl, description, author, item}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        Swal.fire({
            title: "This will delete the picture",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeFavorite(item))
              Swal.fire("Done!", "The picture has been deleted.", "success");
            }
          })

        
    }

    const handleInfo = () => {

    }


    return(
        <div className='picContainer'>
            <div>
                <img className='picImg' src={imgUrl} />
            </div>
            <div className='itemBar'>
                <div className='picText'>
                    <h3>{description.length === 0 ? 'No description' : description.slice(0,25)+'...'}</h3>
                    <p>Picture By: {author}</p>
                </div>
                <div className='btnContainer'>
                    <button className='picBtn' onClick={handleInfo} style={{padding: '0.2em'}}><img src='src/assets/mas.png'/></button>
                    <button className='picBtn' onClick={handleDelete} style={{padding: '0.2em'}}><img src='src/assets/favOn.png'/></button> 
                    <button className='picBtn' ><img style={{width: '2em', height: '2em'}} src='src/assets/descargar.png'/></button>
                </div>
            </div>
        </div>
    )
    
}