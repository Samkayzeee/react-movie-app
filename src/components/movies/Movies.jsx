import APIS from "../../js/Urls";
import { useNavigate } from "react-router-dom";



const Movie = ({movies}) => {
  const navigate = useNavigate();
    return ( 
        <>
            <div className="movies">
            <div className="main">
            {
              movies.map((movie) => {
                return(
                  <div key={movie.id} onClick={() => navigate(`/details/${movie.id}`)} >
                    <h1> {movie.title} </h1>
                    <p>
                      {movie.overview}
                    </p>
                    <img src={`${APIS.IMGURL}${movie.poster_path}`} alt={movie.title} />
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