import React from "react";
import {AuthContext} from '../Auth/AuthContext'
function useAuth(){
 return React.useContext(AuthContext);
} 
function Permisions({ children }) {
 
  let auth = useAuth();
//   let location = useLocation();
  

  if (!auth.user) {    
    return null
  }
  return children;


  
}

// export {fakeAuthProvider};
export default Permisions