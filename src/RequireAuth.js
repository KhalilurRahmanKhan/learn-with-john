import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './firebase.init';

const RequireAuth = ({children}) => {
    
    let location = useLocation();
  
    if (!auth.currentUser) {
      
      return <Navigate to="/signin" state={{ from: location }} replace />;
    }
  
    return children;
   
};

export default RequireAuth;