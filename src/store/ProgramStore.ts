import GenerateTemplate from "../constants/template";
import { useState } from "react";
import axios from "axios";


const UseProgramStore=()=>{
   const {PROGRAM} = GenerateTemplate();
   const [program,setProgram]=useState(PROGRAM);
   const [ isOpenModal, setIsOpenModal ]=useState(false);
   const [isEdit,setIsEdit]=useState(false);
   const [list,setList] =useState([]);
   const [programLoading,setProgramLoading]=useState(false);

   const HandleProgram = (key:string, key1:string,value:any) => {
       let currentProgram:any = {
           name:program.name,
           university_id:program.university_id,
           semester:program.semester
       }
       currentProgram[key][key1] = value
       setProgram(currentProgram);    
   }

    const handleModal=()=>{
     setProgram(PROGRAM)
     setIsEdit(false);
     setIsOpenModal(!isOpenModal);
   }

    const handleEdit=(index:any)=>{
      //TODO:PRE POPPULATE THE VALUE OF FORM..
    // TAKING ALL THE VALUE FROM SELECTED OBJECT
    setIsEdit(true); 
    const Program:any= list[index];
    let newProgram:any={
           name:{
             value:Program.name,
             type:"text",
             error:"",
             active:false
           },
           link:{
            value:Program.link,
            type:"file" ,
            error:"",
            active:false
           },
           cover:{
            value:Program.cover,
            type:"file",
            error:"",
            active:false
           },
           course:{
             value:Program.course,
             type:"text",
             error:"",
             active:false
           },
           subject:{
             value:Program.subject,
             type:"text",
             error:"",
             active:false
           },
           semester:{
             value:Program.semester,
             type:"text",
             error:"",
             active:false
           },
           university:{
             value:Program.university,
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
    console.log("new product",newProgram)
    setProgram(newProgram);
    setIsOpenModal(true);
   }
  //update one product
   const updatePrograms = async(id:any) => {
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
   const createPrograms = async (e:any) => {
    e.preventDefault()
    const programData=new FormData();
    for(const [key,value] of Object.entries(program)){
     programData.append(key,value['value']);
    }
    console.log("programData",programData);
   try{
    const headers:any = {
      'Content-Type': 'application/json',
      "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNhNGI3MTg2YmM1MjFhZTg0M2Q5M2IiLCJpYXQiOjE2MTQ0MzMxMzd9.MBMhCLm6QYmfTnzgxGQzpA4vUZiyHdLD5Tr278eqOuY"
    }; 
    const res= await axios.post('http://localhost:3002/api/paper_products',programData,{headers});
    console.log(res.data);
    alert("SUCCESFULLY SUBMITED");
    setIsOpenModal(false)
    }catch(e){
    alert(e)
      }
   } 
  //  get the list of the Product
   const getPrograms = async() => {
     
    setProgramLoading(true);
     try{
       const headers:any={
         "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNhNGI3MTg2YmM1MjFhZTg0M2Q5M2IiLCJpYXQiOjE2MTQ0MzMxMzd9.MBMhCLm6QYmfTnzgxGQzpA4vUZiyHdLD5Tr278eqOuY"
       }
       const res=await axios.get('http://localhost:3002/api/paper_products/',{headers});
       setList(res.data);
       console.log("PRODUCTS",res);
       setProgramLoading(false)
      }catch(e){
       setProgramLoading(false) 
       alert(e);
      }
   } //async

   return {
       program,
       HandleProgram,
       isOpenModal,
       isEdit,
       list,
       handleEdit,
       createPrograms,
       updatePrograms,
       getPrograms,
       handleModal,
       programLoading
   }
}

export default UseProgramStore;