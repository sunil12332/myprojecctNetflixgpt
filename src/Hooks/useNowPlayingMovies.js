import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utlis/movieslice";
import { headers } from "../utlis/constraints";
import { NowPlaying_API } from "../utlis/constraints";


const   useNowPlayingMovies=()=>{
  
    const dispatch=useDispatch()


    const fetchdata=async()=>{
     
        const response = await fetch (NowPlaying_API, 
         headers
        )

        const data = await response.json();
          console.log(data.results);
        dispatch(addNowPlayingMovies(data.results))

  
    }

      useEffect(()=>{
        fetchdata();
    },[])


}

export default useNowPlayingMovies;


