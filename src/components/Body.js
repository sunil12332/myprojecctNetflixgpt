import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse" 
import MovieTrailer from "./MovieTrailer"


const Body=()=>{


 

   const Allpaths=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/Browse',
        element:<Browse/>
    },
    {
        path:'/trailer/:id',
        element:<MovieTrailer/>
    }
   ]
   )
  

    return(
        <div>
         <RouterProvider  router={Allpaths}  />
        </div>
    )
}

export default Body