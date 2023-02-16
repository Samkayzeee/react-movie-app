import { useEffect, useState } from 'react'
import axios from 'axios';
import YouTube from 'react-youtube';
import APIS from './../../js/Urls';
import Movie from '../../components/movies/Movies';
import DetailsPage from '../detailspage/DetailsPage';

function MainPage() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState(null);


    const MAINURL = `${APIS.URL}discover/movie?sort_by=popularity.desc&${APIS.KEY}`;
    const SEARChURL = APIS.URL+"search/movie?"+APIS.KEY;
    const VIDEOURL = `https://api.themoviedb.org/3/movie/id/videos?${APIS.KEY}`;



    useEffect(() => {
      urlFunction();
    },[search]);



    const urlFunction = () => {
      if(search !== ""){
          getMovies(SEARChURL+"&query="+search);
      }
      else{
          getMovies(MAINURL);
      }
    }
    
    const getMovies = async(url) => {
      try {
        const rawMovies = await axios.get(url);
        const movies = await rawMovies.data.results;
        setMovies(movies);
      } catch (error) {
          console.log(error);
      }
    }


      return (
    <div className="MainPage">
          <nav>
            <form action="">
              <input onInput={(e) => setSearch(e.target.value)} type="search" name="" id="" />
            </form>
          </nav>
          <Movie movies={movies}/>
    </div>
  )
}


export default MainPage;
