import './App.css';
import Navbar from './components/Navbar/Navbar';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import RequireAuth from './RequireAuth';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/404/NotFound';

function App() {

  


  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={ <RequireAuth><Checkout /></RequireAuth>} />
        <Route path="/about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/signin" element={<Login></Login>} />
        <Route path="/signup" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
