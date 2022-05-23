/* import movie from "./movie.json"; */
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails(){
    
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then(data => {
            setIsLoading(false);
            setMovie(data);
        })
    }, [movieId]);

    if(isLoading){
        return <Spinner />;
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);

    return <div className={styles.detailsContainer}>
        <img
            className={`${styles.col} ${styles.movieImage}`}
            src={imageUrl}
            alt={movie.title}
        />
        <div className={styles.col2}>
            <p>
                <h1>{movie.title}</h1>
            </p>
            <p>
                {movie.overview}
            </p>


            <div className={styles.columna}>
                <p><strong>Genero: </strong>{" "}
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p><strong>IMDb: </strong>
                    <span className={styles.imdb}>{movie.vote_average}</span>
                </p>
                <p><strong>Visitas: </strong>
                    {movie.popularity}
                </p>
                <p><strong>Idioma orginal: </strong>
                    {movie.spoken_languages.map((spoken_languages) => spoken_languages.name).join(", ")}
                </p>
                <p><strong>Lanzamiento: </strong>
                    {movie.release_date}
                </p>
                <p><strong>Duración: </strong>
                    {movie.runtime} min
                </p>
                <p><strong>Compañia: </strong>
                    {movie.production_companies.map((production_companies) => production_companies.name).join(", ")}
                </p>
                {movie.video}
            </div>

            <strong>Página web: </strong>
            <a href={movie.homepage}>{movie.homepage}</a>
        </div>



        <div>

        </div>
    </div>;
}