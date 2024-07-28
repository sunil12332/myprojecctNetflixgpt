/* eslint-disable jsx-a11y/img-redundant-alt */
import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidaData } from "../utlis/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import { auth } from "../utlis/firebase"
import { useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userslice";

const Login=()=>{

    const[formstate,setformstate]=useState(true);
    const[errormessage,setrrormessage]=useState(null);


    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const dispatch=useDispatch();
  
     
    const handleClick=(e)=>{
       // console.log()
       e.preventDefault();
       console.log(email.current.value)
        console.log(password.current.value)

       const message=  checkValidaData(email.current.value,password.current.value);
       setrrormessage(message);

       if(message) return;
       
   if(!formstate)
          {//signup logic
           console.log("sunil")
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                 .then((userCredential) => {
                 // Signed up 
                   const user = userCredential.user;
                    updateProfile(user, {
                      displayName: name.current.value, photoURL: ""
                           }).then(() => {
                  // Profile updated!
                      const {uid,email,displayName,photoURL} = auth.currentUser;
                         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));   // ...
                        }).catch((error) => {
                   // An error occurred
        // ...
                        setrrormessage(error.message)
                         });
        
                        console.log(user); 
         // ...
                          })
                  .catch((err) => {
                   console.log(err.code);
                    console.log(err.message);
                   setrrormessage(err.code + err.message)
          });
  
       }

  else{

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
              // Signed in 
             const user = userCredential.user;
                 console.log(user);
                   // ...
            })
          .catch((err) => {
             console.log(err.code);
              console.log(err.message);
             setrrormessage(err.code + err.message)
            });

      }
       
    }

    const toggleState=()=>{
        setformstate(!formstate);

     }


    return(
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png"
            alt="background-image"/>
            </div>
            
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">

            <h1 className="font-bold text-3xl py-4">{formstate ?"sign In":"Sign Out"} </h1>
            
            { !formstate&&
            <input
            ref={name}
            type="text"
             placeholder="User-Name"
             className="p-4 my-2 w-full bg-gray-700"/>
            }

             <input
             ref={email}
             type='text'
              placeholder="emailAddress" 
             className="p-4 my-2 w-full bg-gray-700"/>

             <input 
             ref={password}
             type="password"
             placeholder="Password"
             className="p-4 my-2 w-full bg-gray-700"/>
             <p className="text-red-500 font-semibold">{errormessage}</p>

             <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={(e)=>handleClick(e)}>{formstate ?"sign In":"Sign Out"}</button>
           
           <p className="py-4 cursor-pointer" onClick={()=>toggleState()}>{ formstate ?"New to Netflix Sign Up Now":"Already a user Sign IN"}</p>
            </form>
            
        </div>
    )
}

export default Login