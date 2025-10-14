import React from "react";
import NavBar from "../components/NavBar.jsx";
import FooterSection from "../components/FooterSection.jsx";
import HotelResortList from "../components/HotelResortList.jsx";


function HotelPage(){


    return (
        <>
        <NavBar/>
        <HotelResortList/>        
        <FooterSection/>
        </>
    )
}

export default HotelPage;