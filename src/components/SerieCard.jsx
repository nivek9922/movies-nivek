import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function SerieCard({tv}){
    const imageUrl = "https://image.tmdb.org/t/p/w500" + tv.poster_path;
     
    return(
        <li className={styles.movieCard}>
            <Link to={"/series/" + tv.id}>
            <img 
            width={180} 
            height={270} 
            className={styles.movieImage} 
            src={imageUrl} 
            alt={tv.title} />
            <div>{tv.title}</div>
            </Link>
        </li>  
    );
}