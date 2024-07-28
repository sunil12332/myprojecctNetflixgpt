import { useEffect } from "react";
import { headers } from "../utlis/constraints"

const useTrailer=(id)=>{

    const fetchdata=async()=>{
     
        const response = await fetch ("https://api.themoviedb.org/3/movie/" + id +"/videos?language=en-US",
         headers
        )

        const data = await response.json();
        return data;
    }

      useEffect(()=>{
        fetchdata();
    },[])


    
}


export default useTrailer;