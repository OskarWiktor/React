import MovieCard from "../../molecules/MovieCard/MovieCard";

function MovieGrid({movies}) {
  return (
    <div className="movie-grid">
      <h1 className="movie-grid--title">Movies from Selected Category</h1>
      <div className="movie-grid--wrapper">
        {movies.map((movies) => (
            <MovieCard
              key={movies.title}
              title={movies.title}
              year={movies.year}
              genre={movies.genres}
              thumbnail={movies.thumbnail}
            />
        ))}
      </div>
    </div>
  );
}
export default MovieGrid;
