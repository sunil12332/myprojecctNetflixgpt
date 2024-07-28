import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utlis/constraints";

const MovieCard=({posterPath,id})=>{
   if(!posterPath) return null;
    return(
    
      <Link to={"/trailer/"+id}> 
      <div className="w-48 pr-4">
        <img alt="Movie Cardd"
         src={IMG_CDN_URL+posterPath}/>
       </div>
       </Link>
    )

}

export default MovieCard;