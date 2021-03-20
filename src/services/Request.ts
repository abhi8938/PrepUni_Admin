import axios from 'axios';

const Request=()=>{
 const fileUpload=async (file:any)=>{
      //Call register api
    const headers = {
      'Content-Type': 'application/json',
    };
    return axios
      .post('http://localhost:8080/', file, {headers})
      .then((response) => response)
      .catch((error) => error);
    } 

  return {fileUpload}
}


export default Request;