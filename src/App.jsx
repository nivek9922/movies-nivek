
import { Routes, Route} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { Navbar } from "./components/Navbar/Navbar";
import { LandingPageSeries } from "./pages/LandingPageSeries";
import { SerieDetails } from "./pages/SerieDetails";

export function App() {
    return(
        
        <div>
            <div>
                <Navbar />
            </div>
            <Routes>
                <Route  path="/*" element={<LandingPage />} />
                <Route  path="/series" element={<LandingPageSeries />} />
                <Route  path="/movies/:movieId" element={<MovieDetails />} />
                <Route  path="/series/:serieId" element={<SerieDetails />} />
            </Routes>
       
        </div>
        
    );
}

