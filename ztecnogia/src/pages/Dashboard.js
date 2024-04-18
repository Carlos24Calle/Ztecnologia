
import React, { useState, useEffect, useCallback } from "react";
import QuetoList from "../components/QuetosList/QuetoList";
import { get } from "../httprequeset/httprequeset";


const Dashboard =() =>{
    const [quetosList, setquetosList] = useState([]);
  const [gettingData, setGettingData] = useState(true);
  const url = process.env.REACT_APP_API_BASE_URL;
  const cbResponse = (response) => {
    setGettingData(false);
    setquetosList(response);
  };
  const getData = useCallback(() => {
    get(`${url}/queto/`, cbResponse);
  }, [url]);

  useEffect(() => {
    gettingData && getData();
  }, [gettingData, url, getData]);
    return(
        <div>
          <QuetoList quetosList={quetosList} />
        </div>
    )
}

export default Dashboard;