import { useState } from "react";
import MovieCard from "../../molecules/MovieCard/MovieCard";

function Search({ movies }) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search">
        <div className="search--box">
          <input
            className="search--input"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="search--movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.title + movie.year}
              title={movie.title}
              year={movie.year}
              genre={movie.genres}
              thumbnail={movie.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
