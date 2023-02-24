import APIS from "../../js/Urls";
import { useNavigate } from "react-router-dom";
import './Movies.css';



const Movie = ({movies}) => {
  const navigate = useNavigate();
    return ( 
        <>
            <div className="Movies">
            <div className="main">
            {
              movies.map((movie) => {
                return(
                  <div className="main-movies" key={movie.id} onClick={() => navigate(`/details/${movie.id}`)} >
                      <div className="movie_img">
                        <img src={`${APIS.IMGURL}${movie.poster_path}`} alt={movie.title} />
                      </div>

                      <h1 className="movie_title">{movie.title}</h1>
                  </div>
                )
              })
            }
          </div>
            </div>
        </>
     );
}
 
export default Movie;