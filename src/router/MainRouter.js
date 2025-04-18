
import Form from "../compontents/Form";
import Cities from "../compontents/Cities";
import Landing from "../compontents/Landing";


const MainRounter = {
    path:'/',
    element:<Landing />,
    children: [
      {
        path:'/city',
        element:<Cities/>,
      },
      {  
        path:'/form',
        element:<Form/>
      }
    ]
}

export default MainRounter;
