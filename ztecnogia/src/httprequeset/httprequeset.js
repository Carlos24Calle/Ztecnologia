import axios from "axios";
import {} from "react-router-dom";
export const post = async (url,formData,cbResponse) => {
    try {
        const{data} = await axios.post(url,formData)
        cbResponse(data)
             
    } catch (error) {
        console.log(error);
        
    }
}
    export const postAuth = async (url,formData,cbResponse) => {
        const {token} = JSON.parse(localStorage.getItem('userInfo'))
        try {
            const{data} = await axios.post(url,formData,{headers:{
                Authorization: `JWT, ${token}`
            }})
            cbResponse(data)
                 
        } catch (error) {
            console.log(error);
            
        }
}
export const get = async (url,cbResponse) => {
    const {token} = JSON.parse(localStorage.getItem('userInfo'))
    try {
        const{data} = await axios.get(url,{headers:{
            Authorization: `JWT, ${token}`
        }})
        cbResponse(data)
             
    } catch (error) {
        console.log(error);
        
    }
}
export const getAuth = async (url, token) => {
    try {
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      };
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  