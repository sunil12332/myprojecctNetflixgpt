import { useDispatch } from "react-redux";
import { TopRated_API, headers } from "../utlis/constraints";

import { useEffect } from "react";
import { addTopRated } from "../utlis/movieslice";


const   useTopRated=()=>{
  
    const dispatch=useDispatch()

    const fetchdata=async()=>{
     
        const response = await fetch (TopRated_API, 
         headers
        )

        const data = await response.json();
     //   console.log(data.results);
        dispatch(addTopRated(data.results))

  
    }

      useEffect(()=>{
        fetchdata();
    },[])


}

export default useTopRated;