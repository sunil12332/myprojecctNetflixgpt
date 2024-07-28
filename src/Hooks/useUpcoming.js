import { useDispatch } from "react-redux";
import { Upcoming_API, headers } from "../utlis/constraints";
import { addUpcoming } from "../utlis/movieslice";
import { useEffect } from "react";


const   useUpcoming=()=>{
  
    const dispatch=useDispatch()

    const fetchdata=async()=>{
     
        const response = await fetch (Upcoming_API, 
         headers
        )

        const data = await response.json();
       // console.log(data.results);
        dispatch(addUpcoming(data.results))

  
    }

      useEffect(()=>{
        fetchdata();
    },[])


}

export default useUpcoming;