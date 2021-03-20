import * as React from 'react';
import SideMenu from '../components/SideMenu';

type props={
   history:any,
   location:any,
   match:any
   onToggle:()=>void
}
const Packages:React.FunctionComponent<props>=({history,location,match,onToggle})=>{
   return(
   <section id="packages">
      <SideMenu onToggle={onToggle}/>
      <h1>packages</h1>
   </section>
  )
}
export default Packages;

 