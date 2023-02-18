import { useEffect, useState } from 'react'
import axios from 'axios';
import APIS from './../../js/Urls';
import Movie from '../../components/movies/Movies';

function MainPage() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);


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
        const movies = await rawMovies.data.results;
        setMovies(movies);
      } catch (error) {
          console.log('Theirs is an error')
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
            <div>

            { movies?  <Movie movies={movies}/> : <h1>No Videos Available</h1>}

            </div>
    </div>
  )
}


export default MainPage;
