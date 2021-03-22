import GenerateTemplate from "../constants/template";
import {URL} from "../constants/url";
import axios from "axios";
import { useState } from "react";
import Request from "../services/Request";

const UseProductStore=()=>{
   const {PRODUCT} = GenerateTemplate();
   const [product,setProduct]=useState(PRODUCT);
   const [ isOpenModal, setIsOpenModal ]=useState(false);
   const [isEdit,setIsEdit]=useState(false);
   const [list,setList] =useState([]);
   const [productLoading,setProductLoading]=useState(false);

   const HandleProduct = (key:string, key1:string,value:any) => {
       let currentProduct:any = {...product}
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
    const {putData} = Request();
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
      await putData('/paper_products',productData)
      alert("SUCCESFULLY SUBMITED");
      setIsOpenModal(false);
    }
    catch(e){
      alert(e)
    }
   } 
  //  get the list of the Product
   const getProducts = async() => {
    const {fetchData} = Request();
    setProductLoading(true);
    try{
      let data = await fetchData('/paper_products');
      setList(data)
    }catch(e){
      alert(e)
    }
    setProductLoading(false);
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