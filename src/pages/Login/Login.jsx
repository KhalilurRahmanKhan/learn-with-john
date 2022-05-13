import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Footer/Footer';


const Login = () => {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

const from = location.state?.from?.pathname || '/';



    function handleLogin(){
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    if(userCredential.user.emailVerified === true){

      navigate(from,{replace:true});
    }
    else{
      signOut(auth).then(() => {
    }).catch((error) => {
    });
      setError('Email is not verified');
    }
  })
  .catch((error) => {
    setError(error.message);
  });

  setEmail('');
    setPassword('');
    }

    function handleGoogleLogin(){
      signInWithPopup(auth, provider)
      .then((result) => {  
        navigate(from,{replace:true});    
      }).catch((error) => {
        setError(error.message);
      });
     }
function handleResetPassword(){
  sendPasswordResetEmail(auth, email)
  .then(() => {

    toast("Password reset email sent!");
 
  })
  .catch((error) => {
  
    const errorMessage = error.message;
    setError(errorMessage);

  });
}

    return (
        <div>
               <div className="row justify-content-center text-center mt-5">
                   <div className="col-md-3">
                        
                        <h1 className="h3 mb-3 fw-normal">Please SignIn</h1>

                        <div className="form-floating">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="name@example.com" />
                        <label >Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Password"/>
                        <label >Password</label>
                        </div>
                        {
                          error ? <small className='text-danger'>{error}</small> : ''
                        }
                      

                        <button onClick={handleLogin} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button><p></p>
                        <button onClick={handleGoogleLogin} className="w-100 btn btn-lg btn-success" type="submit">SignIn with Google</button>
                     <button className='btn btn-link' onClick={handleResetPassword}>Forget password?</button>
                     <p>Not signed up yet? {<Link to={'/signup'}>Register </Link>}here.</p>

                     <ToastContainer />
                   </div>
                   </div>             
        </div>
    );
};

export default Login;