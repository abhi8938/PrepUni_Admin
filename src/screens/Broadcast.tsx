import * as React from 'react';
import SideMenu from '../components/SideMenu';

type props={
   history:any,
   location:any,
   match:any,
   onToggle:()=>void
}
const Broadcast:React.FunctionComponent<props>=({history,location,match,onToggle})=>{
  return(
    <section id="broadcast">
       <SideMenu onToggle={onToggle}/>
       <h1>Brodcast</h1>
    </section>
  ) 
}

export default Broadcast;