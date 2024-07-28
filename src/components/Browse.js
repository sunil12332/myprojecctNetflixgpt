import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Uppercontainer from "./Uppercontainer";
import Lowercontainer from "./Lowercontainer";
import GptSearch from "./GptSerach";
import { useSelector } from "react-redux";


const Browse=()=>{

    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
    
    useNowPlayingMovies();



    return(
        <div className="flex flex-col">
            <Header/>
            {showGptSearch?( <GptSearch/>):(
                <>
                  <Uppercontainer/>
                    <Lowercontainer/>
                </>
            )
            }

           
          
        
        </div>
    )
}

export default Browse