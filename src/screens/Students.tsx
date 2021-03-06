import * as React from 'react';
import SideMenu from '../components/SideMenu';

type props={
   history:any,
   location:any,
   match:any,
   onToggle: () => void
 }
const Students:React.FunctionComponent<props>=({history,location,match, onToggle})=>{
  return(
    <section id="students">
       <SideMenu onToggle={onToggle}/>
        <h1>Students</h1>   
    </section>

  )
}

export default Students;

