import { SeriesGrid } from "../components/SeriesGrid";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPageSeries() {
    const query = useQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 300);

    return (
        <div>
            <SeriesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
      

        );
    
    
}