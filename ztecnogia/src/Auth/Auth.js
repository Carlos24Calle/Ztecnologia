import React from "react";
import {
  useLocation,
  Navigate,
} from "react-router-dom";
 import {AuthContext} from './AuthContext'
function useAuth(){
 return React.useContext(AuthContext);
} 
function RequireAuth({ children }) {
 
  let auth = useAuth();
  
  let location = useLocation();
  

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

// export {fakeAuthProvider};
export default RequireAuth