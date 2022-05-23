/* import movie from "./movie.json"; */
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { RiMovieLine } from 'react-icons/ri';

export function SerieDetails(){
    
    const { serieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [serie, setSerie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        get("/tv/" + serieId).then(data => {
            setIsLoading(false);
            setSerie(data);
        })
    }, [serieId]);

    if(isLoading){
        return <Spinner />;
    }

   
    const imageUrl = "https://image.tmdb.org/t/p/w500" + serie.poster_path;

    return <div className={styles.detailsContainer}>

        <img
            className={`${styles.col} ${styles.movieImage}`}
            src={imageUrl}
            alt={serie.title}
        />
        <div className={styles.col2}>
            <p>
                <h1>{serie.name}</h1>
            </p>

            <small className={styles.prom}>
                <RiMovieLine className={styles.logoprom}></RiMovieLine>
                {serie.episode_run_time}m prom.

            </small>
            <p>
                {serie.overview}
            </p>


            <div className={styles.columna}>
                <p><strong>Genero: </strong>{" "}
                    {serie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p><strong>IMDb: </strong>
                    <span className={styles.imdb}>{serie.vote_average}</span>
                </p>
                <p><strong>Visitas: </strong>
                    {serie.popularity}
                </p>
                <p><strong>Idioma orginal: </strong>
                    {serie.spoken_languages.map((spoken_languages) => spoken_languages.name).join(", ")}
                </p>
                <p><strong>Primera emisión: </strong>
                    {serie.first_air_date}
                </p>
                <p><strong>Temporadas: </strong>
                    {serie.number_of_seasons}
                </p>
                <p><strong>Episodios: </strong>
                    {serie.number_of_episodes}
                </p>
                <p><strong>Compañia: </strong>
                    {serie.production_companies.map((production_companies) => production_companies.name).join(", ")}
                </p>
                <p><strong>Estado: </strong>
                    {serie.status}
                </p>
              
            </div>

            <strong>Página web: </strong>
            <a href={serie.homepage}>{serie.homepage}</a>
        </div>

    </div>;
}