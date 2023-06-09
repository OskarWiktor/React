import HeroCarousel from "./components/organisms/hero-carousel/HeroCarousel";
import MovieCarousel from "./components/organisms/movie-carousel/MovieCarousel";
import Navbar from "./components/organisms/navbar/Navbar";

import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);
  const [movies2023, setMovies2023] = useState([]);

  const [moviesGenreHorror, setMoviesGenreHorror] = useState([]);
  const [moviesGenreComedy, setMoviesGenreComedy] = useState([]);
  const [moviesGenreThriller, setMoviesGenreThriller] = useState([]);
  const [moviesGenreAnimated, setMoviesGenreAnimated] = useState([]);
  const [moviesGenreFantasy, setMoviesGenreFantasy] = useState([]);
  const [moviesGenreSuperhero, setMoviesGenreSuperhero] = useState([]);
  const [moviesGenreAction, setMoviesGenreAction] = useState([]);

  useEffect(() => {
    axios
      .get("/db/movies.json")
      .then((res) => {
        setMovies(res.data);

        const moviesFrom2023 = res.data.filter((movie) => movie.year === 2023);
        setMovies2023(moviesFrom2023);

        const moviesHorror = res.data.filter((movie) =>
          movie.genres.includes("Horror")
        );
        setMoviesGenreHorror(moviesHorror);

        const moviesComedy = res.data.filter((movie) =>
          movie.genres.includes("Comedy")
        );
        setMoviesGenreComedy(moviesComedy);

        const moviesThriller = res.data.filter((movie) =>
          movie.genres.includes("Thriller")
        );
        setMoviesGenreThriller(moviesThriller);

        const moviesAnimated = res.data.filter((movie) =>
          movie.genres.includes("Animated")
        );
        setMoviesGenreAnimated(moviesAnimated);

        const moviesFantasy = res.data.filter((movie) =>
          movie.genres.includes("Fantasy")
        );
        setMoviesGenreFantasy(moviesFantasy);

        const moviesSuperhero = res.data.filter((movie) =>
        movie.genres.includes("Superhero")
        );
        setMoviesGenreSuperhero(moviesSuperhero);

        const moviesAction = res.data.filter((movie) => 
        movie.genres.includes("Action")
        );
        setMoviesGenreAction(moviesAction)
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const shuffledMovies = shuffleArray(movies);
      const selectedMovies = shuffledMovies.slice(0, 5);
      setRandomMovies(selectedMovies);
    }
  }, [movies]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="App">
      <Navbar />
      <HeroCarousel randomMovies={randomMovies} />
      <MovieCarousel carouselTitle={"Movies from 2023"} movies={movies2023} />
      <MovieCarousel carouselTitle={"Horror"} movies={moviesGenreHorror} />
      <MovieCarousel carouselTitle={"Comedy"} movies={moviesGenreComedy} />
      <MovieCarousel carouselTitle={"Thriller"} movies={moviesGenreThriller} />
      <MovieCarousel carouselTitle={"Animated"} movies={moviesGenreAnimated} />
      <MovieCarousel carouselTitle={"Fantasy"} movies={moviesGenreFantasy} />
      <MovieCarousel carouselTitle={"Superhero"} movies={moviesGenreSuperhero} />
      <MovieCarousel carouselTitle={"Action"} movies={moviesGenreAction} />
    </div>
  );
}

export default App;
