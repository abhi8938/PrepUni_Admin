import GenerateTemplate from "../constants/template";
import { useState } from "react";
import axios from "axios";


const UseProductStore=()=>{
   const {PRODUCT} = GenerateTemplate();
   const [product,setProduct]=useState(PRODUCT);
   const [ isOpenModal, setIsOpenModal ]=useState(false);
   const [isEdit,setIsEdit]=useState(false);
   const [list,setList] =useState([]);
   const [productLoading,setProductLoading]=useState(false);

   const HandleProduct = (key:string, key1:string,value:any) => {
       let currentProduct:any = {
           name:product.name,
           link:product.link,
           cover:product.cover,
           course:product.course,
           subject:product.subject,
           semester:product.semester ,
           university:product.university 
       }
       currentProduct[key][key1] = value
       setProduct(currentProduct);    
   }

    const handleModal=()=>{
     setProduct(PRODUCT)
     setIsEdit(false);
     setIsOpenModal(!isOpenModal);
   }

    const handleEdit=(index:any)=>{
      //TODO:PRE POPPULATE THE VALUE OF FORM..
    // TAKING ALL THE VALUE FROM SELECTED OBJECT
    console.log("index",list[index]);
    setIsEdit(true); 
    const Product:any= list[index];
    let newProduct:any={
           name:{
             value:Product.name,
             type:"text",
             error:"",
             active:false
           },
           link:{
            value:Product.link,
            type:"file" ,
            error:"",
            active:false
           },
           cover:{
            value:Product.cover,
            type:"file",
            error:"",
            active:false
           },
           course:{
             value:Product.course,
             type:"text",
             error:"",
             active:false
           },
           subject:{
             value:Product.subject,
             type:"text",
             error:"",
             active:false
           },
           semester:{
             value:Product.semester,
             type:"text",
             error:"",
             active:false
           },
           university:{
             value:Product.university,
             type:"text",
             error:"",
             active:false 
           } 
    };
    // for(const [key,value] of Object.entries(Product)){
    //   if(key==="created_at"|| key==="DUR" || key==="keywords" || key==="last_update"|| key==="_id" ||key==="_v" ) continue
    //    console.log("new product",newProduct)
    //   console.log("key - value",`${key} - ${value}`); 
       
    //   newProduct[key]['value'] = `${value}`
    // }
    console.log("new product",newProduct)
    setProduct(newProduct);
    setIsOpenModal(true);
   }
  //update one product
   const updateProducts = async(id:any) => {
    console.log("inside udate products");
    try{
    const headers:any = {
      'Content-Type': 'application/json',
    }; 
    const res= await axios.post(`../products.json/:${id}`, {
    },headers)
    console.log(res);
    }catch(e){
     alert(e);
    }
   }  //async
   // create one product
   const createProducts = async (e:any) => {
    e.preventDefault()
    console.log("product",product); 
    const productData=new FormData();
    productData.append('link',product.link.value);
    productData.append('name',product.name.value);
    productData.append('course',product.course.value);
    productData.append('semester',product.semester.value);
    productData.append('subject',product.subject.value);
    productData.append('university',product.university.value);
    productData.append('cover',product.cover.value);
   try{
    const headers:any = {
      'Content-Type': 'application/json',
      "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNhNGI3MTg2YmM1MjFhZTg0M2Q5M2IiLCJpYXQiOjE2MTQ0MzMxMzd9.MBMhCLm6QYmfTnzgxGQzpA4vUZiyHdLD5Tr278eqOuY"
    }; 
    const res= await axios.post('http://localhost:3002/api/paper_products',productData,{headers});
    console.log(res.data);
    alert("SUCCESFULLY SUBMITED");
    setIsOpenModal(false)
    }catch(e){
    alert(e)
      }
   } 
  //  get the list of the Product
   const getProducts = async() => {
     
    setProductLoading(true);
     try{
       const headers:any={
         "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNhNGI3MTg2YmM1MjFhZTg0M2Q5M2IiLCJpYXQiOjE2MTQ0MzMxMzd9.MBMhCLm6QYmfTnzgxGQzpA4vUZiyHdLD5Tr278eqOuY"
       }
       const res=await axios.get('http://localhost:3002/api/paper_products/',{headers});
       setList(res.data);
       console.log("PRODUCTS",res);
       setProductLoading(false)
      }catch(e){
       setProductLoading(false) 
       alert(e);
      }
   } //async

   return {
       product,
       HandleProduct,
       isOpenModal,
       isEdit,
       list,
       handleEdit,
       createProducts,
       updateProducts,
       getProducts,
       handleModal,
       productLoading
   }
}

export default UseProductStore;