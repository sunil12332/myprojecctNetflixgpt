import { mood_list } from "../utlis/constraints";
 
  const Moodheader=()=>{
  const keys=Object.keys(mood_list);
      
  const moody=(e)=>{
      console.log(e);
  }

    return(
       <div className="grid-cols-2">
        {
          keys.map((key)=>
          <li onClick={(e)=>moody(e)}>{key}</li>
          )

        }
          
        </div>
    )

    
}


export default Moodheader;