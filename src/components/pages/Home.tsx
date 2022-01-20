import React from "react";
import Headertop from "../inc/Headertop";
import Footer from "./Footer";
import Section from "./Section";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Headertop />
            <Slider />
            <Section />
            <Footer />
        </div>
    )
}
export default Home;