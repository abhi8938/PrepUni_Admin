import * as React from 'react';

type props={
  item:String,
  handleModal:()=>void
}
const AddButton:React.FunctionComponent<props>=({item,handleModal})=>{
  return(
    <div className="add_button_container">
      <button className="btn btn-primary" onClick={()=>handleModal()} >+ Add {item}</button>
    </div>
  )
}
export default AddButton;

