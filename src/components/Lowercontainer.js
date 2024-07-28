import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";

const Lowercontainer=()=>{
    usePopular();
    useTopRated();
    useUpcoming();
    const movies=useSelector((store)=>store.movies);
       
  //  console.log(movies.nowPlayingMovies);
  //  console.log(movies.Popular);


    return(

        movies.nowPlayingMovies &&
        <div className="bg-black">

            <div className="-mt-52 relative z-20">

            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies
            }/>
               <MovieList title={"Popular"} movies={movies.Popular
            }/>
                <MovieList title={"Top Rated"} movies={movies.TopRated
            }/>
                <MovieList title={"Upcoming"} movies={movies.Upcoming
            }/>
            </div>
        </div>
    )

}



export default Lowercontainer;
