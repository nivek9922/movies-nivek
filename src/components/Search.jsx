import styles from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';
import {useSearchParams } from "react-router-dom";


export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");
 

    const handleSubmit =  (e) =>{
            e.preventDefault();
    };
    return (
       
        <form onSubmit={handleSubmit} className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input type="text"
                    placeholder="¿Qué deseas ver?"
                    className={styles.searchInput}
                    value={search ?? ""}
                    onChange={(e) => {
                        const value = e.target.value;
                        setQuery({search: value});
                    }}
                />
                <FaSearch size={16} className={styles.searchButton} />
            </div>
        </form>
    )
}
