import { useDispatch, useSelector } from 'react-redux'
import './favorites.css'
import { getFavorite, getSearchQuery, setSearchQuery } from '../../features/favorites/favoritesSlice'
import { CardItem } from '../../components/cardItem/cardItem'
import Select from 'react-select'
import { SearchBar } from '../../components/searchbar/searchbar'
import { useEffect, useState } from 'react'
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Favorites = () => {
    const favoritePicture = useSelector(getFavorite)
    const searchQuery = useSelector(getSearchQuery);
    const [orderedPictures, setOrderedPicture] = useState(favoritePicture)
    const dispatch = useDispatch();



    const handleSearch = (query) => {
        dispatch(setSearchQuery(query));
    };

    const filteredPictures = searchQuery ? orderedPictures.filter((picture) => picture.alt_description && picture.alt_description.toLowerCase().includes(searchQuery.toLowerCase())
    ) : orderedPictures;

    useEffect(() => {

        setOrderedPicture(favoritePicture)
    }, [favoritePicture])

    const handleChange = (e) => {
        if (e.value !== '') {

            let newFavoritePicture = [...filteredPictures]
            newFavoritePicture = newFavoritePicture.sort((a, b) => a[e.value] < b[e.value] ? 1 : -1)
            setOrderedPicture(newFavoritePicture)
        }
    }
    const options = [
        { value: 'created_at', label: 'Date' },
        { value: 'width', label: 'Width' },
        { value: 'height', label: 'Height' },
        { value: 'likes', label: 'Likes' },

    ]

    const [currentPage, setCurrentPage] = useState(1)
    const rows = 12
    const firstPage = (currentPage - 1) * rows
    const lastPage = firstPage + rows
    const picsPerPage = filteredPictures.slice(firstPage, lastPage)
    const totalPages = Math.ceil(filteredPictures.length / rows)

    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }


    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="img-header background2"></div>
            <div className='btnOrder'>
                <Select options={options}
                    className='selectContainer'
                    value={options.value}
                    onChange={handleChange}
                    placeholder="Order By"
                />

            </div>
            {filteredPictures.length === 0 ?
                <div className="dataContainer">
                    <p style={{ color: 'black' }}>It seems that there are no favorite pics saved or coincidences.</p>
                </div>
                :
                <>
                    <div className="dataContainer">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 300: 1, 700: 2, 1000: 4 }}
                        >
                            <Masonry gutter="10px" className='widthMasonry'>

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
                    </div>
                    <div className="paginationContainer">
                        <button className="paginationBtn" onClick={() => handlePage(currentPage - 1)}
                            disabled={currentPage === 1}>Previous</button>
                        <p style={{ color: "black" }}>{currentPage}</p>
                        <button className="paginationBtn" onClick={() => handlePage(currentPage + 1)}
                            disabled={currentPage === totalPages || totalPages === 0}>Next</button>

                    </div>
                </>
            }


        </>


    )
}