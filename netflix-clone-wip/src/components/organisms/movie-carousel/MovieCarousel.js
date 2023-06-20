import MovieCard from "../../molecules/movie-card/MovieCard";

function MovieCarousel({ movies }) {

  return (
    <section className="movie-carousel">
      <div className="movie-carousel--title--wrapper">
        <h1 className="movie-carousel--title">Movie Carousel</h1>
      </div>
      <div className="movie-carousel--wrapper">
        {movies.map((movies, title) => (
          <MovieCard
            key={title}
            title={movies.title}
            year={movies.year}
            genre={movies.genres}
            thumbnail={movies.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}
export default MovieCarousel;
