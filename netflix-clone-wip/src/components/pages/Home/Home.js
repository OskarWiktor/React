import MovieCarousel from "../../organisms/MovieCarousel/MovieCarousel";
import HeroCarousel from "../../organisms/HeroCarousel/HeroCarousel";

function Home({
  randomMovies,
  movies2023,
  moviesGenreHorror,
  moviesGenreComedy,
  moviesGenreThriller,
  moviesGenreAnimated,
  moviesGenreFantasy,
  moviesGenreSuperhero,
  moviesGenreAction,
}) {
  return (
    <div className="App">
      <HeroCarousel randomMovies={randomMovies} />
      <MovieCarousel carouselTitle={"Movies from 2023"} movies={movies2023} />
      <MovieCarousel carouselTitle={"Horror"} movies={moviesGenreHorror} />
      <MovieCarousel carouselTitle={"Comedy"} movies={moviesGenreComedy} />
      <MovieCarousel carouselTitle={"Thriller"} movies={moviesGenreThriller} />
      <MovieCarousel carouselTitle={"Animated"} movies={moviesGenreAnimated} />
      <MovieCarousel carouselTitle={"Fantasy"} movies={moviesGenreFantasy} />
      <MovieCarousel
        carouselTitle={"Superhero"}
        movies={moviesGenreSuperhero}
      />
      <MovieCarousel carouselTitle={"Action"} movies={moviesGenreAction} />
    </div>
  );
}

export default Home;
