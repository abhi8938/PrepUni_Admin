import * as React from 'react';
import SideMenu from '../components/SideMenu';

type props={
   history:any,
   location:any,
   match:any,
   onToggle:()=>void 
}
const Subscription:React.FunctionComponent<props>=({history,location,match,onToggle})=>{
  return(
  <section id="subscription">
     <SideMenu onToggle={onToggle}/>
     <h1>Subscription</h1>
  </section>
  ) 
}

export default Subscription;

