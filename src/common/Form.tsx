import * as React from 'react';



type props={
  item:object,
  handleChange:(key:string,key1:string,value:any) => void
  onSubmit:(e:any) => void
}
const Form:React.FunctionComponent<props>=({item,handleChange,onSubmit})=>{
  const data=item;
  const allForms:any=[]
  
  const handleFileUpload=async (file:any,key:string,key1:string)=>{
        handleChange(key,key1,file);
  }
  /**
   *@global lopping through the form data and render input(ui) according to their input type; 
  */
  const getForms=()=>{
    for(const [key,value] of Object.entries(data)){
    //  when input type text render this..
      if(value.type==="text") allForms.push ( <div className="form-group"> <label>{key}</label> <input type={value.type} value={value.value} onChange={(e)=>handleChange(key,'value',e.target.value)} className="form-control"/> </div>)
    //  when input type dropdown render this.. 
      if(value.type==='dropdown') allForms.push( <><label>{key}</label> <select className="form-select mt-3 mb-2" aria-label="Default select example" onChange={(e)=>handleChange(key,'value',e.target.value)}>
         <option selected>zero</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
       </select></>)
    // when input type file render this
     if(value.type==="file") allForms.push(
        <div className="form-group">
        <label >{key==="link"?'file upload':key}</label>
        <input type="file" className="form-control" 
        onChange={(e)=> e.target.files && e.target.files.length!==0 && handleFileUpload(e.target.files[0],key,'value')} />
         </div>   
       )
    }
  }
  getForms();
  return(
     <>
     <section className="form_container">
      <h1>Form</h1>
      <form>
         {allForms}
         <button className="btn btn-primary" onClick={onSubmit} style={{marginTop:"1.5em"}}>Submit</button>
     </form>
     </section>
    </>
   )
}
export default Form;