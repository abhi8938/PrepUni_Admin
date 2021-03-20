import * as React from 'react';

type props={
  heading:String,
  backgroundColor:String,
  height:String,
  width:String,
  handleModal:()=>void
}
const Modal:React.FunctionComponent<props>=({heading,backgroundColor,height,width,children,handleModal})=>{

     const contentContainerRef=React.useRef<HTMLDivElement>(null) 

     const handleClick=(e:any)=>{
        const currentcontainerRef=contentContainerRef.current;
        if(e.target===currentcontainerRef){
             handleModal();
    
        }else{
             return;
        } 
      }
return(
    <div className="backdrop" ref={contentContainerRef} onClick={(e)=>handleClick(e)} >
        {/* <figure className="close_btn">
          <img src={closeButton} alt="close button"/>// will add if needed
        </figure> */}
        <div className="container content_container"  style={{background:`${backgroundColor}`,width:"100%",maxWidth:`${width}`,height:`${height}`}}>
            {children}
        </div>
   </div>
  )
};

export default Modal;