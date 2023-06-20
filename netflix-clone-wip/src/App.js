import HeroCarousel from "./components/organisms/hero-carousel/HeroCarousel";
import MovieCarousel from "./components/organisms/movie-carousel/MovieCarousel";
import Navbar from "./components/organisms/navbar/Navbar";

import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/db/movies.json")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const shuffledMovies = shuffleArray(movies);
      const selectedMovies = shuffledMovies.slice(0, 5);
      setRandomMovies(selectedMovies);
    }
  }, [movies])

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  return (
    <div className="App">
      <Navbar />
      <HeroCarousel randomMovies={randomMovies} />
      <MovieCarousel movies={movies} />
    </div>
  );
}

export default App;
