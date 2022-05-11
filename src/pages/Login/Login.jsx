import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () => {
  const navigate = useNavigate();

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const provider = new GoogleAuthProvider();




    function handleLogin(){
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential);

    navigate('/');
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    }

    function handleGoogleLogin(){
      signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate('/');
      }).catch((error) => {
        const errorMessage = error.message;
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
                      

                        <button onClick={handleLogin} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button><p></p>
                        <button onClick={handleGoogleLogin} className="w-100 btn btn-lg btn-success" type="submit">SignIn with Google</button>
                     
                   </div>
                   </div>             
           
        </div>
    );
};

export default Login;