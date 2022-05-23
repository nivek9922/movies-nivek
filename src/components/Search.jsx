import styles from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useEffect, useState } from "react";



export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setsearchText] = useState(""); //otra forma
    const navigate = useNavigate();

    useEffect(() => {
        setsearchText(search || ""); //otra forma
    }, [search]);

    const handleSubmit =  (e) =>{
            e.preventDefault();
            navigate("/?search=" +  searchText); //otra forma
    };
    return (
       
        <form onSubmit={handleSubmit} className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input type="text"
                    placeholder="¿Qué deseas ver?"
                    className={styles.searchInput}
                    value={searchText}
                    onChange={(e) => {

                        const value = e.target.value;
                        setsearchText(value); //otra forma
                        navigate("/?search=" + value);
                    }}
                />
                <FaSearch size={16} className={styles.searchButton} />
            </div>
        </form>
    )
}
