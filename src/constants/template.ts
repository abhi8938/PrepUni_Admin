
 const  GenerateTemplate=()=>{
     //TODO: Upload file to server, get link in response , create product using link

     const UNIVERSITY = {
       name:{
          value:'' ,
        type:"text",
        active:false,
        error:'' 
       },
       logo:{
          value:'' ,
        type:"file",
        active:false,
        error:'' 
       }
     }
    const PRODUCT={
      name:{
        value:'' ,
        type:"text",
        active:false,
        error:'' 
        },
        link:{
        value:'' ,
        type:"file",
        active:false,
        error:'' 
        },
        cover:{
        value:'' ,
        type:"file",
        active:false,
        error:'' 
        },
        course:{
        value:'' ,
        type:"dropdown",
        active:false,
        error:'',
        list:["sample1 ",'sdasdasd'] 
        },
        subject:{
        value:'' ,
        type:"text",
        active:false,
        error:'' 
        },
        semester:{
        value:'' ,
        type:"dropdown",
        active:false,
        error:'' 
        },
        university:{
        value:'' ,
        type:"text",
        active:false,
        error:'' 
      }
   }
   return {PRODUCT, UNIVERSITY}
}
export default GenerateTemplate;