import { useParams } from "react-router-dom"
import { useEffect, useRef } from "react";
import { useState } from "react";
const MovieTrailer=()=>{

 const[data1,setdata1]=useState({});
  const flag=useRef(0);
    
  
   const {id}=useParams();
   const fetchdata=async()=>{
     
    const response = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",{
            
            headers: {
              'Authorization': 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2VkZmFjMDY2YTYzNTBjMGMyODA4NjRjZTE5NWExOSIsInN1YiI6IjY2MDZhZTZmMzAzYzg1MDE2M2I4N2E1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YFoWpUHUmVs74SrdmrBhiqISb-AW3V9teuOxbr1h-bI',
              'Accept': 'application/json'
            }
        })
    const data = await response.json();
    flag.current+=1;
    setdata1(data);
}

  useEffect(()=>{
    fetchdata();
},[])


if(flag.current==0)
 { 
    return
 }
  const result=data1?.results;
  const Trailer=[];

   result.map((res)=>{
    if(res?.type=="Trailer")
    {
       Trailer.push(res);
    }
   })

   const key=Trailer[0]?.key;
  
    return(
      <div>
        <div className=" flex items-center justify-center h-screen bg-gray-900">
        {  <iframe
         className="w-[560px] h-[560px]"
       src={"https://www.youtube.com/embed/"+key+"?autoplay=1&mute=1"}
      title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" 
      ></iframe>
     }
        </div>
           <div>{Trailer[0]?.name}</div>
        </div>

    )
}

export default MovieTrailer