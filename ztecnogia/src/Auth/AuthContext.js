import React,{} from 'react';
import {fakeAuthProvider} from './Auth'
export const AuthContext = React.createContext({});

function AuthProvider({ children })  {
 const [user, setUser] = React.useState(localStorage.getItem('userInfo') || false);

  let signin = (newUser, callback ) => {
    console.log('newUser',newUser.user);
    const {email} = newUser.user;
  
    return fakeAuthProvider.signin(() => {
      setUser(email);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider