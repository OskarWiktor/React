import HeroCarousel from "./components/organisms/hero-carousel/HeroCarousel";
import MovieCarousel from "./components/organisms/movie-carousel/MovieCarousel";
import Navbar from "./components/organisms/navbar/Navbar";

import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/db/movies.json")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroCarousel movies={movies} />
      <MovieCarousel movies={movies} />
    </div>
  );
}

export default App;
