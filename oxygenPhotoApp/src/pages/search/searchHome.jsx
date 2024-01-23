import { getPicsData, getPicsError, getPicsStatus } from "../../features/search/searchSlice"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPics } from "../../features/search/searchThunk";
import { CardItem } from "../../components/cardItem/cardItem";



export const SearchHome = () => {
    
    const [showSpinner, setShowSpinner] = useState(false)
    const [loadedPics, setLoadedPic] = useState([])

    const dispatch = useDispatch();
    const pics = useSelector(getPicsData)
    const picsStatus = useSelector(getPicsStatus)
    const picsError = useSelector(getPicsError)
    
    const Spinner = () => <p> Loading... </p>
    

    useEffect(() =>{
        if(picsStatus === 'idle'){
            dispatch(fetchPics())
            console.log('peticion')
        } else if (picsStatus === 'pending'){
            setShowSpinner(true)
            console.log('pendiente')

        } else if (picsStatus === 'fulfilled'){
            setLoadedPic(pics)
            setShowSpinner(false)
            console.log('hecho')
            console.log(pics)

        } else if (picsStatus === 'rejected'){
            setShowSpinner(true)
            console.log('picsError')
            console.log(picsError)
        }
    },[dispatch,pics,picsStatus])


    return (
        <>
            
            <img className="img-header" src="src\assets\neom-wTmGtmGQCjQ-unsplash.jpg"/>
            {showSpinner ? <Spinner/> : <div>
            {loadedPics.map((picture) => <CardItem
                                            imgUrl = {picture.urls.thumb}
                                            description = {picture.alt_description}
                                            author = {picture.user.name} />
                                            )}
                
            </div>}
        
        </>


    )
}