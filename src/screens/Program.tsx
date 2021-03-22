import * as React from 'react';

import AddButton from '../components/AddButton';
import Form from '../common/Form';
import List from '../common/List';
import Modal from '../components/Modal';
import SideMenu from '../components/SideMenu';
import UseProgramStore from '../store/ProgramStore';

type props={
   history:any,
   location:any,
   match:any,
   onToggle:()=>void,
  
}

const Programs:React.FunctionComponent<props>=({history,location,match,onToggle})=>{
   const { 
       program,
       HandleProgram ,
       isOpenModal,
       isEdit,
       list,
       handleEdit,
       updatePrograms,
       createPrograms,
       getPrograms,
       handleModal,
       programLoading
     }=UseProgramStore()

   React.useEffect(() => {
     getPrograms()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
  
   
   const getData=()=>{
     if(list.length === 0) return;
     return list.map((item:any,index:number)=>{
       return (
          <tr key={index}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.link}</td>
          <td>{item.cover}</td>
          <td>{item.course}</td>
          <td>{item.subject}</td>
          <td>{item.semester}</td>
          <td>{item.university}</td>
          <td><button className="btn btn-secondary" onClick={(e)=>handleEdit(index)}>Edit</button></td>
         </tr>
        )
     })
   }
  
   React.useEffect(()=>{
    //  console.log("product",product);

   },[program,isOpenModal,programLoading])
   return(
   <section id="product">
    <SideMenu onToggle={onToggle}/>
    <h1>Programs</h1>
    <AddButton item={'Product'} handleModal={handleModal} />
    {programLoading?<h1>loading</h1>:<List tableHeading={program}  getData={getData}/>}
    {isOpenModal?
      <Modal backgroundColor={'#fff'} height={"90%"} width={"60%"} heading={"Form"} handleModal={handleModal}>
       <Form onSubmit={(e) => {isEdit === true ? updatePrograms(23) :  createPrograms(e)} } item={program} handleChange={HandleProgram}/> 
      </Modal>:null
    }
   </section>
  )
}

export default Programs;