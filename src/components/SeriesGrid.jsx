import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { get } from "../utils/httpClient";
import { SerieCard } from "./SerieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { Empty } from "./Empty";




export function SeriesGrid({search}){
    const [series, setSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? "/search/tv?query=" + search + "&page=" + page
            : "/discover/tv?page=" + page;
        get(searchUrl).then((data) => {
            setSeries((prevSeries) => prevSeries.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
            
        });
    }, [search, page]);

 /*    if(isLoading){
        return ;
    } */

    if(!isLoading && series.length === 0) {
        return <Empty />;
    }

 
    return (
        <div>
            <header>
                <h1 className={styles.title}> <b>ÚLTIMAS</b> SERIES DE ESTRENO
                    {/* Search results for "{search}" */}</h1>
            </header>

            <InfiniteScroll
                dataLength={series.length}
                hasMore={hasMore}
                next={() => setPage((prevPage) => prevPage + 1)}
                loader={<Spinner />}
            >

                <ul className={styles.moviesGrid}>
                    {series.map((tv) =>
                        <SerieCard key={series.id} tv={tv} />
                    )}
                </ul>
            </InfiniteScroll>
        </div>
    );
}