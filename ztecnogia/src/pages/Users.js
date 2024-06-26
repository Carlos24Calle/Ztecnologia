// import React from 'react';
// import UserForm from '../components/UsersForm/UsersForm';
// const Users=() =>{
//     return(
//         <div>
//            <UsersList usersList={usersList} />
//       <UserForm />
//         </div>
//     )
// }

// export default Users;
import React, { useState, useEffect, useCallback } from "react";
import UsersList from "../components/UsersList/UsersList";
import { get } from "../httprequeset/httprequeset";
import { Link } from "react-router-dom";
import { url } from "../utilils/common-functions";
const Users = () => {
  const [usersList, setusersList] = useState([]);
  const [gettingData, setGettingData] = useState(true);
 
   const cbResponse = (res) => {
    setGettingData(false);
    setusersList(res.response);
  };

  const getData = useCallback(() => {
    get(`${url}/users/`, cbResponse);
  }, []);

  useEffect(() => {
    gettingData && getData();
  }, [gettingData, getData]);

  console.log("usersList", usersList);

  return (
    <div className='px-10 py-5'>
      <div className="header-quetos flex justify-between mb-10">
        <h2 className="font-bold text-3xl">Usuarios</h2>
        <Link to={"crear"} className="flex items-center border rounded px-8 bg-merkapp-purple text-merkapp-white hover:bg-merkapp-white hover:text-merkapp-purple ease-in-out duration-300">Nuevo</Link>
      </div>
      <UsersList usersList={usersList} />
    </div>
  );
};

export default Users;
