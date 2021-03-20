import * as React from 'react';
import SideMenu from '../components/SideMenu';

type props={
   history:any,
   location:any,
   match:any,
   onToggle:() => void
}
const Home:React.FunctionComponent<props>=({history,location,match,onToggle})=>{
    return(
      <div>
        <SideMenu onToggle={onToggle}/>
        <h1>Home</h1>
      </div>
   )
}

export default Home;