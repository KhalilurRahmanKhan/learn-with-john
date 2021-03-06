import React, { useState } from 'react';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();


  function handleSendEmailVerification(){
    sendEmailVerification(auth.currentUser)
  .then(() => {
  
    toast("Email verification sent!");

  
  });
  }



 function handleRegister(){
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;


    handleSendEmailVerification();
    setEmail('');
    setPassword('');

    if(user.emailVerified === true){
      navigate('/');
    }
    else{
      signOut(auth).then(() => {
          }).catch((error) => {
          });
    }

  })
  .catch((error) => {
    setError(error.message);

  
  });
 }

 function handleGoogleRegister(){
  signInWithPopup(auth, provider)
  .then((result) => {

    navigate('/');
    
    
  }).catch((error) => {
    setError(error.message);
  });
 }
    return (
        <div>
               <div className="row justify-content-center text-center mt-5">
                   <div className="col-md-3">
                        
                        <h1 className="h3 mb-3 fw-normal">Please SignUp</h1>

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

                        <button onClick={handleRegister} className="w-100 btn btn-lg btn-primary" type="submit">SignUp</button><p></p>
                        <button onClick={handleGoogleRegister} className="w-100 btn btn-lg btn-success" type="submit">SignUp with Google</button><br />
                        <p>Already signed up? {<Link to={'/signin'}>Login </Link>}here.</p>
                        
                     <ToastContainer />

                   </div>
                   </div>             
        </div>
    );
};

export default Register;