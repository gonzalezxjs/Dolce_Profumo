import React from 'react';
import NavBarApp from '../Components/1. Home/1.1. NavBar/NavBarApp';
import HeaderApp from '../Components/1. Home/1.2. Header/HeaderApp';
import BodyApp from '../Components/1. Home/1.3. Body/BodyApp';
import FooterApp from '../Components/1. Home/1.4. Footer/FooterApp';

const HomeApp = () => {
    return (
        <div>
            <NavBarApp/>
            <HeaderApp/>
            <BodyApp/>
            <FooterApp/>

        </div>
    )
}

export default HomeApp
