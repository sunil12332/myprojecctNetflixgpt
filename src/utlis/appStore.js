 import { configureStore } from "@reduxjs/toolkit";
  import userReducer from './userslice'
  import movieReducer from './movieslice'
  import gptReducer from "./gptSlice"
  import configReducer from "./configSlice"
 const appStore=configureStore(

    {
        reducer:{
          user:userReducer,
          movies:movieReducer,
          gpt:gptReducer,
          config:configReducer,
          
        }
    }
 ) ;


 export default appStore;