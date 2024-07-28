import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestions=()=>{
  const {movieNames,movieResult}=useSelector((store)=>store.gpt);
  console.log('hello',movieNames)
  console.log(movieResult)

  if(!movieNames) return null;

  return <div className="p-4 m-4 bg-black text-white bg-opacity-80">
    <div>
      {movieNames.map((movieName,index)=>(
        <MovieList
        key={movieNames}
        title={movieName}
        movies={movieResult[index]}
        />
      ))
 
      }
    </div>
  
    </div>

   
}


export default GptMovieSuggestions;
