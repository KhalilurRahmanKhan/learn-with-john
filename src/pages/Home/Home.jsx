import React from 'react';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;