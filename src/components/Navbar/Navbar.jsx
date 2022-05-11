import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './navbar.css';

const Navbar = () => {

    

    const navigate = useNavigate();

    const [user,setUser] = useState({});
    onAuthStateChanged(auth, (user) => {
        if (user) {
     
          setUser(user);
          
        } 
      });


      function handleSignout(){
        signOut(auth).then(() => {
        navigate('/signin');
        setUser({});
          }).catch((error) => {
            // An error happened.
          });
      }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Learn With John</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/"></Link>
                    </li>     
                </ul> 
                <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className='link' to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='link' to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='link' to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/checkout" className='link'>Checkout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className='link'>SignUp</Link>
                        </li>
                    {
                        user.uid ? 
                        <button onClick={handleSignout} className='btn btn-sm btn-danger'>Logout</button>
                        : 
                        <li className="nav-item">
                        <Link to="/signin" className='link'>SignIn</Link>
                        </li>
                    }
                   
                   
                   
                </ul>
                </div>
                </div>
                </div>
            </nav>
    );
};

export default Navbar;