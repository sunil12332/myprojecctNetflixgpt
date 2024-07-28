import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch=()=>{  
    return(
        <div>
          
          <div className="fixed -z-10">
            <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png"
             alt="background-image"/>
            </div>
             <GptSearchBar/>
             <GptMovieSuggestions/>

        </div>
    )
}


export default GptSearch