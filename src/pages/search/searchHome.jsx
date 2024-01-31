import { getPicsData, getPicsError, getPicsStatus } from "../../features/search/searchSlice"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPics } from "../../features/search/searchThunk";
import { CardItem } from "../../components/cardItem/cardItem";
import { SearchBar } from "../../components/searchbar/searchbar";




export const SearchHome = () => {
    
    const [showSpinner, setShowSpinner] = useState(false)
    const [initialImages, setInitialImages] = useState([]);
    
    const dispatch = useDispatch();
    const pics = useSelector(getPicsData)
    const picsStatus = useSelector(getPicsStatus)
    const picsError = useSelector(getPicsError)

    
    const Spinner = () => <p style={{color: 'black'}}> Loading... </p>

    const handleSearch = (query) => {
        dispatch(fetchPics({ queryPicParams: query }));
    };

    useEffect(() =>{
        if(picsStatus === 'idle'){
            dispatch(fetchPics())
        } else if (picsStatus === 'pending'){
            setShowSpinner(true)

        } else if (picsStatus === 'fulfilled'){
            
            setShowSpinner(false)

        } else if (picsStatus === 'rejected'){
            setShowSpinner(true)
            console.log(picsError)
        }
    },[dispatch, picsStatus])

    const picturesToDisplay = pics.results ? pics.results : pics;



    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="img-header background1"></div>
            {showSpinner ? <Spinner/> : <div className="dataContainer">
            {picturesToDisplay.map((picture) => <CardItem
                                            imgUrl = {picture.urls.regular}
                                            description = {picture.alt_description}
                                            author = {picture.user.name} 
                                            key={picture.id}
                                            item={picture}
                                            />
                                            )}
                
            </div>}
        
        </>


    )
}