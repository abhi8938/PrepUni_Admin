import * as React from 'react';

import AddButton from '../components/AddButton';
import Form from '../common/Form';
import List from '../common/List';
import Modal from '../components/Modal';
import SideMenu from '../components/SideMenu';
import UseProductStore from '../store/ProductStore';

type props={
   history:any,
   location:any,
   match:any,
   onToggle:()=>void,
  
}

const Products:React.FunctionComponent<props>=({history,location,match,onToggle})=>{
   const { product,
       HandleProduct,
       isOpenModal,
       isEdit,
       list,
       handleEdit,
       updateProducts,
       createProducts,
       getProducts,
       handleModal,productLoading}=UseProductStore()

   React.useEffect(() => {
     getProducts()
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

   },[product,isOpenModal,productLoading])
   return(
   <section id="product">
    <SideMenu onToggle={onToggle}/>
    <h1>Products</h1>
    <AddButton item={'Product'} handleModal={handleModal} />
    {productLoading?<h1>loading</h1>:<List tableHeading={product}  getData={getData}/>}
    {isOpenModal?
      <Modal backgroundColor={'#fff'} height={"90%"} width={"60%"} heading={"Form"} handleModal={handleModal}>
       <Form onSubmit={(e) => {isEdit === true ? updateProducts(23) :  createProducts(e)} } item={product} handleChange={HandleProduct}/> 
      </Modal>:null
    }
   </section>
  )
}

export default Products;