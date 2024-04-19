// import React from 'react';
// import ClientsForm from '../../components/ClientsForm/ClientsForm';
// const Clients =() =>{
//     return(
//         <div>
//            <ClientsForm/>
//         </div>
//     )
// }

// export default Clients

import React, { useState, useEffect, useCallback } from "react";
import ClientstList from "../../components/ClientsList/ClientsList";
import { get } from "../../httprequeset/httprequeset";
import { Link } from "react-router-dom";
import { url } from "../../utilils/common-functions";
const Products = () => {
  const [clientList, setclientList] = useState([]);
  const [gettingData, setGettingData] = useState(true);
 
   const cbResponse = (res) => {
    setGettingData(false);
    setclientList(res.response);
  };

  const getData = useCallback(() => {
    get(`${url}/clients`, cbResponse);
  }, []);

  useEffect(() => {
    gettingData && getData();
  }, [gettingData, getData]);

  console.log("productList", clientList);

  return (
    <div className='px-10 py-5'>
      <div className="header-quetos flex justify-between mb-10">
        <h2 className="font-bold text-3xl">Clientes</h2>
        <Link to={"crear"} className="flex items-center border rounded px-8 bg-merkapp-purple text-merkapp-white hover:bg-merkapp-white hover:text-merkapp-purple ease-in-out duration-300">Nuevo</Link>
      </div>
      <ClientstList clientList={clientList} />
    </div>
  );
};

export default Products;