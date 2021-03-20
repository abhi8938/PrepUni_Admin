import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import React  from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Navigation from './components/Navigation';
import Routes from "./constants/routes";
import Sidebar from 'react-sidebar';

const getRoutes=(onToggle:() => void)=>{
   return Routes.map((item,index)=>{
        return(
          <Route path={item.route} exact={item.route === '/'? true:false} render={(props)=><item.component onToggle={onToggle} {...props}/>}/>
         )
    })
  }
  
function App() {

  const [isSidebarOpen,setIsSideBarOpen]=React.useState(true)

     const onSetSidebarOpen=()=>{
         setIsSideBarOpen(!isSidebarOpen);
     }
 
  return (
         <Router>
           <Switch>
     <Sidebar
        sidebar={<Navigation/>}
        open={isSidebarOpen}
        onSetOpen={onSetSidebarOpen}
        docked={isSidebarOpen}
        styles={{ sidebar: { background: "white",width:"15%" } }}
      >
       {getRoutes(onSetSidebarOpen)}
  </Sidebar>
    </Switch>
   </Router>

  );
}

export default App;
