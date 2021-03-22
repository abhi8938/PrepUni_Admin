import GenerateTemplate from "../constants/template";
import {URL} from "../constants/url";
import axios from "axios";
import { useState } from "react";
import Request from "../services/Request";

const UseUniversityStore=()=>{
   const {UNIVERSITY} = GenerateTemplate();
   const [university,setUniversity]=useState({...UNIVERSITY});
   const [ isOpenModal, setIsOpenModal ]=useState(false);
   const [isEdit,setIsEdit]=useState(false);
   const [list,setList] =useState([]);
   const [Loading,setLoading]=useState(false);

   const handleUniversity = (key:string, key1:string,value:any) => {
       let x:any = {...university}
       x[key][key1] = value
       setUniversity(x);    
   }

    const handleModal=()=>{
     setUniversity({...UNIVERSITY})
     setIsEdit(false);
     setIsOpenModal(!isOpenModal);
   }

   const deleteUniversity = (key:string) => {
   }

   const getUniveristy = async () => {
    const {fetchData} = Request();
    setLoading(true);
    try{
      let data = await fetchData('/University');
      setList(data)
    }catch(e){
      alert(e)
    }
    setLoading(false);
   }

   const handleEdit = (index:number) =>{
    const x:any = list[index]
    let y:any = {...UNIVERSITY}
    for(const [key,value] of Object.entries(y)){
        y[key].value = x[key]
    }
    setUniversity(y)
   }

   const createUniversity = async (e:any) => {
    e.preventDefault()
    const {postData} = Request();
    let universityData=new FormData();
    universityData.append('logo',university.logo.value);
    universityData.append('name',university.name.value);
    console.log("Uni Data - ",universityData.getAll("name"),university);
    try{
      await postData('/University',universityData)
      setIsOpenModal(false);
    }
    catch(e){
      alert(e)
    }
   } 

   return {
     createUniversity,
     Loading,
       university,
       handleUniversity,
       getUniveristy,
       handleEdit,
       isOpenModal,
       isEdit,
       list,
       handleModal,
   }
}

export default UseUniversityStore;