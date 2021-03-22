import Broadcast from "../screens/Broadcast";
import Home from "../screens/Home";
import Packages from "../screens/Packages";
import Products from "../screens/Products";
import Programs from "../screens/Program";
import Students from "../screens/Students";
import Subscription from "../screens/Subscriptions";

const routes=[
    {
   id:0,
   label:"Home",
   component:Home,
   route:"/"
   },
    {
   id:1,
   label:"Product",
   component:Products,
   route:"/product"
   },
   {
   id:2,
   label:"Students",
   route:"/student",
   component:Students
   },{
   id:3,
   label:"Subscription",
   route:"/subscription",
   component:Subscription
   },{
   id:4,
   label:"Packages",
   route:"/packages",
   component:Packages
   },{
   id:5,
   label:"Broadcast",
   route:"/broadcast",
   component:Broadcast
   },{
   id:6,
   label:"Programs",
   route:"/programs",
   component:Programs 
   } 
]

export default routes;
