import { useDispatch } from "react-redux"
import { Popular_API, headers } from "../utlis/constraints"
import { addPopular } from "../utlis/movieslice"
import { useEffect } from "react"


  const   usePopular=()=>{
  
    const dispatch=useDispatch()

    const fetchdata=async()=>{
     
        const response = await fetch (Popular_API, 
         headers
        )

        const data = await response.json();
        //console.log(data.results);
        dispatch(addPopular(data.results))

  
    }

      useEffect(()=>{
        fetchdata();
    },[])


}

export default usePopular;


