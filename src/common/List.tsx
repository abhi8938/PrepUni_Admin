import * as React from 'react';

type props={
  tableHeading:object,
  getData:any
}
const List:React.FunctionComponent<props>=({tableHeading,getData})=>{

   const getHeading=()=>{
     let heading=[];
     for(const [key,value] of Object.entries(tableHeading)){
         heading.push( <th scope="col">{key}</th>)
     }
     return heading;
   }
  

  React.useEffect(()=>{
    
  },[])

return(
<section id="table">
<div className="table-responsive">
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      {getHeading()}
     <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
     {getData()}
  </tbody>
</table>
</div>
</section> 
    )
}
export default List;