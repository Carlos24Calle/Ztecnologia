import React, { useState, useEffect, useCallback } from "react";
import ProductList from "../../components/ProductsForm/ProductList/ProductList";
import { get } from "../../httprequeset/httprequeset";
import { Link } from "react-router-dom";
import { url } from "../../utilils/common-functions";
const Products = () => {
  const [productList, setproductList] = useState([]);
  const [gettingData, setGettingData] = useState(true);
 
   const cbResponse = (res) => {
    setGettingData(false);
    setproductList(res.response);
  };

  const getData = useCallback(() => {
    get(`${url}/product/`, cbResponse);
  }, []);

  useEffect(() => {
    gettingData && getData();
  }, [gettingData, getData]);

  console.log("productList", productList);

  return (
    <div className='px-10 py-5'>
      <div className="header-quetos flex justify-between mb-10">
        <h2 className="font-bold text-3xl">Productos</h2>
        <Link to={"crear"} className="flex items-center border rounded px-8 bg-merkapp-purple text-merkapp-white hover:bg-merkapp-white hover:text-merkapp-purple ease-in-out duration-300">Nuevo</Link>
      </div>
      <ProductList productList={productList} />
    </div>
  );
};

export default Products;
