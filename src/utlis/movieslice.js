import { createSlice } from "@reduxjs/toolkit";


const movieslice=createSlice(
    {
         name:'movies',
        initialState:{
          nowPlayingMovies: null,
          trailerVideo:null,
          Popular:null,
          TopRated:null,
          Upcoming:null,
      },
         reducers:{
              addNowPlayingMovies:(state,action)=>{
               state.nowPlayingMovies=action.payload;
              },
              addTrailerVideo:(state,action)=>{
               state.trailerVideo=action.payload;
              },
              addPopular:(state,action)=>{
                state.Popular=action.payload;
              },
              addTopRated:(state,action)=>{
                state.TopRated=action.payload;
              },
              addUpcoming:(state,action)=>{
               state.Upcoming=action.payload;
              }
         }

    }
)

export const {addNowPlayingMovies,addTrailerVideo,addPopular,addTopRated,addUpcoming} = movieslice.actions;
export default  movieslice.reducer;