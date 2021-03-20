import * as React from 'react';

import {
  Link,
} from "react-router-dom";

import routes from '../constants/routes';

type navBarProps={
 
}
const Navigation:React.FunctionComponent<navBarProps>=()=>{

    const getLink=()=>{
      return routes.map((item,index)=>{
        return (
             <li className="list-group-item ">
              <Link to={item.route} className="text-decoration-none">{item.label}</Link>
            </li>
         )
       })
}
  return(
       <nav>
          <ul className="list-group">
          {getLink()}
          </ul> 
       </nav>
   
  )
}

export default Navigation;