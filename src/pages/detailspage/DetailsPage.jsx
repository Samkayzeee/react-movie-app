import './DetailsPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import APIS from '../../js/Urls';
import YouTube from 'react-youtube';

const DetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState({});
    const [video, setVideo] = useState(false);

    useEffect(() => {
        fetchMovies(`https://api.themoviedb.org/3/movie/${parseFloat(id)}?${APIS.KEY}`);
       fetchTrailer(`https://api.themoviedb.org/3/movie/${parseFloat(id)}/videos?${APIS.KEY}`);
    },[])


    const fetchMovies = async (url) => {
        const fetchs = await axios.get(url)
        const oneMovie = fetchs.data;
        setMovie(oneMovie);
    }


    const fetchTrailer = async(url) => {
        const fetchs = await axios.get(url);
        const oneMovie = fetchs.data.results[2];

        if (oneMovie === undefined){
            setVideo(false);
        }
        else{
            setVideo(true);
            setTrailer(oneMovie);
        }
    }


    return ( 
        <>
            <div>
               {
                <h1> {movie.title} </h1>
               }
            </div>

               {
                video?

                <YouTube
                        videoId={trailer.key}
                        className={"youtube amru"}
                        containerClassName={"youtube-container amru"}
                        opts={
                            {
                                width: '100%',
                                height: '400px',
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
                    />: <h1>Trailer Not Available</h1>

               }
        </>
     );
}
 
export default DetailsPage;