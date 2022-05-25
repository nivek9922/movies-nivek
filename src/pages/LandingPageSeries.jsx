import { useSearchParams } from "react-router-dom";
import { SeriesGrid } from "../components/SeriesGrid";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPageSeries() {
    const [query] = useSearchParams();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 300);

    return (
        <div>
            <SeriesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
      

        );
    
    
}