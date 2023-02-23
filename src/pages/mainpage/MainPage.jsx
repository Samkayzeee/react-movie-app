import { useEffect, useState } from 'react'
import axios from 'axios';
import APIS from './../../js/Urls';
import Movie from '../../components/movies/Movies';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);


    const MAINURL = `${APIS.URL}discover/movie?sort_by=popularity.desc&${APIS.KEY}`;
    const SEARChURL = APIS.URL+"search/movie?"+APIS.KEY;



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
        if (rawMovies.status !== 200 ){
            throw Error("Theirs a problem fetching videos");
        }
        const movies = await rawMovies.data.results;
        setMovies(movies);
      } catch (error) {
          setError(error.message);
      }
    }


    const form = (e) => {
        e.preventDefault();
    }

      return (
    <div className="MainPage">
          <nav>
            <div className="logo">
              <Link to={'/'}>SAMKAYZEE.</Link>
            </div>

            <form action="" onSubmit={form}>
              <input onInput={(e) => setSearch(e.target.value)} type="search" name="search" id="search" placeholder='Search For Movie' />
            </form>
          </nav>

            <h2 className='latest'>Latest Movies</h2>
            <div className='show_movies'>
              { error ?  <h1 className='error'> { error } No Videos Available</h1> : <Movie movies={movies} />}
            </div>
    </div>
  )
}


export default MainPage;
