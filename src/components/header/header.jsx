import React from 'react';
import './header.css';
import { NavBar } from '../navbar/navbar';

export const Header = () => {

    return (
        <>
            <div className='header grad'>
                <NavBar/>
            </div>
        </>
    )
}