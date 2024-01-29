import { useDispatch, useSelector } from 'react-redux'
import './cardItem.css'
import { addFavoritePic, removeFavorite, getFavorite } from '../../features/favorites/favoritesSlice';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import InfoModal from '../infoModal/infoModal';


export const CardItem = ({imgUrl, description, author, item}) => {

    const dispatch = useDispatch();
    const favorites = useSelector(getFavorite)
    const [open, setOpen] = useState(false)
    
    const isFav = favorites.some((pic) => pic.id === item.id)

    

    const handleFav = () => {
        if(isFav){
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
              
        } else {
            dispatch(addFavoritePic(item))

        }
    }

    const handleDownload = () => {
        const url = item.urls.regular;
        const fileName = description
        Swal.fire({
            title: "Download",
            text: "This will download the picture",
            imageUrl: imgUrl,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(url)
                    .then((response) => response.blob())
                    .then((blob) => saveAs(blob, fileName))
                    .catch((error) => console.log(error));
              Swal.fire("Done!", "The picture has been download.", "success");
            }
          })
      };

      
      const handleInfo = () =>{
        setOpen(true)
      }

      const handleCloseInfo = () =>{
        setOpen(false)
      }


    return(
        <>
        <div className='picContainer'>
            <div>
                <img className='picImg' src={imgUrl} />
            </div>
            <div className='itemBar'>
                <div className='picText'>
                <h3>{description === undefined || description.length === 0 ? 'No description' : description.length <= 28 ? description : `${description.slice(0, 28)}...`}</h3>
                    <p>Picture By: {author.slice(0,28)}</p>
                </div>
                <div className='btnContainer'>
                    {isFav ? <button className='picBtn' onClick={handleInfo} style={{padding: '0.2em'}}><img src='/src/assets/mas.png'/></button>: ''}
                    <button className='picBtn' onClick={handleFav} style={{padding: '0.2em'}}>{isFav ? <img src='/src/assets/favOn.png'/> : <img src='/src/assets/favOff.png'/>}</button> 
                    <button className='picBtn' onClick={handleDownload} ><img style={{width: '2em', height: '2em'}} src='/src/assets/descargar.png'/></button>
                </div>
            </div>
            {open ? <InfoModal description={description} 
                               width={item.width} 
                               height={item.height} 
                               likes={item.likes} 
                               onClose={handleCloseInfo}
                               isOpen={open}
                               id={item.id}
                               picture={item}
                            /> 
            : ''}
        </div>
        
        </>
    )
    
}