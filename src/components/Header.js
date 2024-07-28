import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../utlis/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utlis/userslice";
import {toggleGptSearchView} from "../utlis/gptSlice";
import { changeLanguage } from "../utlis/configSlice";
import Moodheader from "./Moodheader";


const Header=()=>{

    const navigate=useNavigate();
    const user=useSelector(store=>store.user)
    const dispatch=useDispatch();
    const [changemood,setmood]=useState(false);

    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);


    const handleSignOut=()=>{

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          })
    }


        useEffect(()=>{

             onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user.uid;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              navigate("/browse");
              // ...
            }

            else {
              // User is signed out
              // ...
    
              dispatch(removeUser());
              navigate("/");
            
            }
          });
       },[
         ])

        const handleGptSearchClick=()=>{
             dispatch(toggleGptSearchView());
       }

         const handleLanguageChange=(e)=>{
              dispatch(changeLanguage(e.target.value));
         }

      
         const Mood=()=>{  
          setmood(!changemood);
         }


    return(
        <div className="absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
         
                 <img  className="w-36"
                  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                   alt="logo"/>
                { user&&   (
                 <div className="flex p-2" onChange={handleLanguageChange}>
                       {!showGptSearch &&
              <button  className="py-2 px-4 mx-4 py-2 bg-purple-800 text-white rounded-lg" onClick={Mood}>
                Mood
                {
                  changemood &&
                  <Moodheader/>
                }
              </button>
               }

                     { showGptSearch  &&
                        (<select className="p-2 m-2 bg-gray-900 text-white">
                          <option value="en">English</option>
                          <option value="hindi">Hindi</option>
                          <option value="spanish">Spanish</option>
                          </select>)
                      }
                   <button className="py-2 px-4 mx-4 py-2 bg-purple-800 text-white rounded-lg" 
                     onClick={handleGptSearchClick} >
                      {   showGptSearch?"Homepage":"GPTSearch"  }
                   </button>
    
            <img
            className="w-12 h-12"
            alt="user-icon"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            />
            <button onClick={handleSignOut} className="font-bold text-white ">(Sign out)</button>
       
        </div>
 ) }
        </div>
    )
}

export default Header; 