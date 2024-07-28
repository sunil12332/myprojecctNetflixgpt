import { useSelector } from "react-redux";
import lang from "../utlis/languageConstants";
import { useRef } from "react";
import openai from "../utlis/openai";
import { headers } from "../utlis/constraints";
import { addGptMovieResult } from "../utlis/gptSlice";
import { useDispatch } from "react-redux";


const GptSearchBar=()=>{
  
  const  dispatch=useDispatch();
   
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2VkZmFjMDY2YTYzNTBjMGMyODA4NjRjZTE5NWExOSIsIm5iZiI6MTcyMTMyNjQwNC43MDI4NDUsInN1YiI6IjY2MDZhZTZmMzAzYzg1MDE2M2I4N2E1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5RDJOZhx2u1O4tusTk1nkmEYa35LgtrZ2tzu_9263A',
      'accept': 'application/json'
    }
  };
 const langKey=useSelector((store)=>store.config.lang)
 const searchText=useRef(null);


 const searchMovieTMDB=async(movie)=>{



  const url = 'https://api.themoviedb.org/3/search/movie?query=The%20Notebook&include_adult=false&language=en-US&page=1';



    
  const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",options);
  const json= await  data.json();
  console.log('json data',json);

  return json.results;
 }
 
 const handleGptSearchClick=async()=>{

  // Make an API call to Gpt API get MOvie Results;
  const gptQuery=
  "Act as a Movie Recommendation system and suggest some movies for the query:"+
   searchText.current.value+
   ".only give me names 0f 5 movies,comma seperate like the example result given ahead.Example Result:Gadar,Sholay,Don,Golmaal,Koi mil Gaya"
     

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery}],
    model: 'gpt-3.5-turbo',
  });

  if(!gptResults.choices)
  {
    //TODO:write Error Handling
  }

  console.log(gptResults);
  console.log(gptResults.choices?.[0]?.message?.content);
  const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");  

  const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie));
  //map function will not wait
  //searchmovie give promise
  //result we will get the array of promise
  //how we convert the promise array
  // there is function give promise.all
  //which convert promise to data

  const tmdbResults= await Promise.all(promiseArray);
  console.log(tmdbResults); 
  dispatch(addGptMovieResult({movieNames:gptMovies,movieResult:tmdbResults}));
 }

 

   return(
    <div className=" pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>{e.preventDefault()}}>
        <input 
        ref={searchText}
        type="text" 
        className="p-4 m-4 col-span-9"
         placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
         onClick={handleGptSearchClick}
        >{lang[langKey].search}</button>

      </form>
    </div>
   )

  }

export default GptSearchBar;