
export const Logo="";
export const  NowPlaying_API='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}';
export const Popular_API='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
export const TopRated_API='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';
export const Upcoming_API='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}';
export const headers= { headers: {
    'Authorization': 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2VkZmFjMDY2YTYzNTBjMGMyODA4NjRjZTE5NWExOSIsInN1YiI6IjY2MDZhZTZmMzAzYzg1MDE2M2I4N2E1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YFoWpUHUmVs74SrdmrBhiqISb-AW3V9teuOxbr1h-bI',
    'Accept': 'application/json'
  }
}
 
const  trailer_API='https://api.themoviedb.org/3/movie/934632/videos?language=en-US';


export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";



export const mood_list={
    Action:'28',
    Adventure:'12',
    Drama:'18',
    TV_Movie:'10770',
    WAR:'27',
    Science_Fiction:'878',
    Horror:'27',
    Comedy:'35',
    Animation:'16',
    Fantasy:'14',
    Thriller:'53',
    Crime:'80',
    Mystery:'9648',
}




 