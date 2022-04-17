import React from 'react';

const Login = () => {
    return (
        <div>
        <div className="row justify-content-center text-center mt-5">
            <div className="col-md-3">
            <form>
                 
                 <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                 <div class="form-floating">
                 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                 <label for="floatingInput">Email address</label>
                 </div>
                 <div class="form-floating">
                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                 <label for="floatingPassword">Password</label>
                 </div>
                 <div class="form-floating">
                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                 <label for="floatingPassword">Password</label>
                 </div>

                 <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                 <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
             </form>
            </div>
            </div>             
    
 </div>
    );
};

export default Login;