import React from "react";
import NavBar from "../components/NavBar.jsx";
import FooterSection from "../components/FooterSection.jsx";
import FlightBooking from "../components/FlightBooking.jsx";  



function FlightBookingPage(){


    return (
        <>
        <NavBar/>
        <FlightBooking/>
        <FooterSection/>
        </>
    )
}

export default FlightBookingPage;