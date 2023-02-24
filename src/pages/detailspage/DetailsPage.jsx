import './DetailsPage.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import APIS from '../../js/Urls';
import YouTube from 'react-youtube';

const DetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState({});
    const [video, setVideo] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMovies(`https://api.themoviedb.org/3/movie/${parseFloat(id)}?${APIS.KEY}`);
        fetchTrailer(`https://api.themoviedb.org/3/movie/${parseFloat(id)}/videos?${APIS.KEY}`);
    },[])


    const fetchMovies = async (url) => {
        const fetchs = await axios.get(url)
        const oneMovie = fetchs.data;
        console.log(oneMovie);
        setMovie(oneMovie);
    }


    const fetchTrailer = async(url) => {
        const fetchs = await axios.get(url);
         console.log(fetchs.data.results.length);

        if (fetchs.data.results.length >= 4){
            const oneMovie = fetchs.data.results[4];
            if (oneMovie === undefined){
                setVideo(false)
            }
            else{
                setVideo(true);
                setTrailer(oneMovie);
            }
        }
        else {
            const oneMovie = fetchs.data.results[0]
            if (oneMovie === undefined){
                setVideo(false);
            }
            else{
                setVideo(true);
                setTrailer(oneMovie);
            }
        }
    }


    return ( 
        <>
            <div className='movie_details'>
                <div className="details">
                        <h1 className='title'> {movie.title} </h1>
                        <h4 className='overview'> { movie.overview } </h4>
                </div>
               {
                video?
                <div className="trailer">
                    <YouTube
                        videoId={trailer.key}
                        className={"trailer"}
                        containerClassName={"youtube-container amru"}
                        opts={
                            {
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    // autoplay: 1,
                                    controls: 0,
                                    cc_load_policy: 0,
                                    fs: 0,
                                    iv_load_policy: 0,
                                    modestbranding: 0,
                                    rel: 0,
                                    showinfo: 0,
                                },
                            }
                        }
                    />
                </div> : <h1 className='not_available'>Trailer Not Available</h1>

               }

               <Link to={'/'}>Go Back To Videos</Link>
            </div>
        </>
     );
}
 
export default DetailsPage;