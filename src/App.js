import './App.css';
import Slider from './components/Slider/Slider';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
