import * as React from 'react';



type props={
  onToggle:()=>void
}
const SideMenu:React.FunctionComponent<props>=({onToggle})=>{

return(
       <button id="btn"  onClick={() =>{ onToggle()}}>
           <span></span>
           <span></span>
           <span></span>
         </button>
  )
}

export default SideMenu;