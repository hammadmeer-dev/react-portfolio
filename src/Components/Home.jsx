import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Aboutme from "./About-Me";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import Experiance from "./Experience";

const Home = ({ handleNightMode, nightMode }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.targetId) {
            const element = document.getElementById(location.state.targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <Navbar handleNightMode={handleNightMode} nightMode={nightMode} />
            <Hero />
            <Aboutme />
            <Experiance />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
