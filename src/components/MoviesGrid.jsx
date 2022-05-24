/* import movies from "./movies.json"; */
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { get } from "../utils/httpClient";
import { Empty } from "./Empty";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";




export function MoviesGrid({search}){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
            
        });
    }, [search, page]);

 /*    if(isLoading){
        return ;
    } */

    if(!isLoading && movies.length === 0) {
        return <Empty/>;
    }

 
    return (

        <div>

            <header>
                <h1 className={styles.title}> <b>ÚLTIMAS</b> PELÍCULAS DE ESTRENO
                    {/* Search results for "{search}" */}</h1>
            </header>

            <InfiniteScroll
                dataLength={movies.length}
                hasMore={hasMore}
                next={() => setPage((prevPage) => prevPage + 1)}
                loader={<Spinner />}
            >
                 
                <ul className={styles.moviesGrid}>
                    {movies.map((movie) =>
                        <MovieCard key={movie.id} movie={movie} />
                    )}
                </ul>
            </InfiniteScroll>

        </div>
    );
}