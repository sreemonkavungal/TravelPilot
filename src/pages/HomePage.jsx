import React from "react";
import NavBar from "../components/NavBar.jsx";
import ContentSection from "../components/ContentSection.jsx";
import FooterSection from "../components/FooterSection.jsx";
import WhyPilot from "../components/Why-TravelPilot.jsx";



function HomePage(){


    return (
        <>
        <NavBar/>
        <ContentSection/>
        <WhyPilot/>
        <FooterSection/>
        </>
    )
}

export default HomePage;