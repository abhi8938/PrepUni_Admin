import axios from 'axios';
import { URL } from '../constants/url';

const Request=()=>{
    const fetchData = async (path:string) => {
      try{
        const headers:any={
          "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNhNGI3MTg2YmM1MjFhZTg0M2Q5M2IiLCJpYXQiOjE2MTQ0MzMxMzd9.MBMhCLm6QYmfTnzgxGQzpA4vUZiyHdLD5Tr278eqOuY"
        }
        const res=await axios.get(URL + path,{headers});
        console.log(path,res);
        return res.data
       }catch(e){
         return e;
       }
    }
    const postData = async (path:string, data:any) => {
      try{
       const headers:any = {
         'Content-Type': 'application/json',
         "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNhNGI3MTg2YmM1MjFhZTg0M2Q5M2IiLCJpYXQiOjE2MTQ0MzMxMzd9.MBMhCLm6QYmfTnzgxGQzpA4vUZiyHdLD5Tr278eqOuY"
       }; 
       const res= await axios.post(URL + path,data,{headers});
       console.log(path,res.data);
       return true;
       }catch(e){
        console.log(path,JSON.stringify(e));
        return e
       }
      }

    const putData = async (path:string, data:any) => {
   try{
    const headers:any = {
      'Content-Type': 'application/json',
      "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNhNGI3MTg2YmM1MjFhZTg0M2Q5M2IiLCJpYXQiOjE2MTQ0MzMxMzd9.MBMhCLm6QYmfTnzgxGQzpA4vUZiyHdLD5Tr278eqOuY"
    }; 
    const res= await axios.put(URL + path,data,{headers});
    console.log(path,res.data);
    return true;
    }catch(e){
     return e
    }
  }

  return {fetchData,putData,postData}
}


export default Request;