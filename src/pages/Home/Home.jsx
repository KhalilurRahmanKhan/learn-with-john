import React from 'react';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import Slider from '../../components/Slider/Slider';
import data from "../../data";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container mt-5 mb-5">
            <h1 className='text-center mb-5'>Services</h1>
            <div class="row">
            {
           data.map(data => <Services data={data} key={data.id}></Services>)
         }
          </div>
        </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;