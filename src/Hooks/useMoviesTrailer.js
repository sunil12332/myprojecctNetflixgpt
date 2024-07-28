import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utlis/movieslice";
import { useEffect } from "react";


const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();

    const getMovieVideos= async()=>{

        const response = await fetch("https://api.themoviedb.org/3/movie/"+ movieId+ "/videos?language=en-US",{
            headers: {
              'Authorization': 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2VkZmFjMDY2YTYzNTBjMGMyODA4NjRjZTE5NWExOSIsInN1YiI6IjY2MDZhZTZmMzAzYzg1MDE2M2I4N2E1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YFoWpUHUmVs74SrdmrBhiqISb-AW3V9teuOxbr1h-bI',
              'Accept': 'application/json'
            }
        }  
        )


         const json= await response.json();
         const filterData=json.results.filter((video)=>video.type=="Trailer");
         const trailer=filterData.length?filterData[0]:json.results[0];
         dispatch(addTrailerVideo(trailer));

    }

    useEffect(()=>{
        getMovieVideos();
    },[])



}

export default useMovieTrailer;