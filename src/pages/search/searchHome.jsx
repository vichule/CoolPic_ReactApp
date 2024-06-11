import { getPicsData, getPicsError, getPicsStatus } from "../../features/search/searchSlice"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPics } from "../../features/search/searchThunk";
import { CardItem } from "../../components/cardItem/cardItem";
import { SearchBar } from "../../components/searchbar/searchbar";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";



export const SearchHome = () => {

    const [showSpinner, setShowSpinner] = useState(false)

    const dispatch = useDispatch();
    const pics = useSelector(getPicsData)
    const picsStatus = useSelector(getPicsStatus)
    const picsError = useSelector(getPicsError)


    const Spinner = () => <p style={{ color: 'black' }}> Loading... </p>

    const handleSearch = (query) => {
        dispatch(fetchPics({ query }));
        setCurrentPage(1);
    };

    useEffect(() => {
        if (picsStatus === 'idle') {
            dispatch(fetchPics())
        } else if (picsStatus === 'pending') {
            setShowSpinner(true)

        } else if (picsStatus === 'fulfilled') {

            setShowSpinner(false)

        } else if (picsStatus === 'rejected') {
            setShowSpinner(true)
            console.log(picsError)
        }
    }, [dispatch, picsStatus])

    const picturesToDisplay = pics.results ? pics.results : pics;
    const [currentPage, setCurrentPage] = useState(1)
    const rows = 12
    const firstPage = (currentPage - 1) * rows
    const lastPage = firstPage + rows
    const picsPerPage = picturesToDisplay.slice(firstPage, lastPage)
    const totalPages = Math.ceil(picturesToDisplay.length / rows)

    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }


    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="img-header background1"></div>
            {showSpinner ? <Spinner /> : <div className="dataContainer">
                {picturesToDisplay.length === 0 ?
                    <p style={{ color: 'black' }}>It seems that there are no coincidences, try another word.</p>
                    :
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 300: 1, 700: 2, 1000: 3 }}
                    >
                        <Masonry columnsCount={3} gutter="10px" className='widthMasonry'>

                            {picsPerPage.map((picture, index) =>

                                <CardItem
                                    imgUrl={picture.urls.regular}
                                    description={picture.alt_description}
                                    author={picture.user.name}
                                    item={picture}
                                    key={picture.id}
                                    index={index}
                                />
                            )}

                        </Masonry>
                    </ResponsiveMasonry>
                }

            </div>}

            <div className="paginationContainer">
                <button className="paginationBtn" onClick={() => handlePage(currentPage - 1)}
                    disabled={currentPage === 1}>Previous</button>
                <p style={{ color: "black" }}>{currentPage}</p>
                <button className="paginationBtn" onClick={() => handlePage(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}>Next</button>

            </div>
        </>


    )
}