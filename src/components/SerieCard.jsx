import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";

export function SerieCard({tv}){
    
    const imageUrl = getMovieImg(tv.poster_path, 300);
     
    return(
        <li className={styles.movieCard}>
            <Link to={"/series/" + tv.id}>
            <img 
            width={180} 
            height={270} 
            className={styles.movieImage} 
            src={imageUrl} 
            alt={tv.title} />
            <div>{tv.name}</div>
            </Link>
        </li>  
    );
}