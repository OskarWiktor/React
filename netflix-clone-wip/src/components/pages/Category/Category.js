import SideMenu from "../../organisms/SideMenu/SideMenu";
import MovieGrid from "../../organisms/MovieGrid/MovieGrid";
import {useState} from "react";

function Category({movies, allGenres}) {
  const [selectedGenres, setSelectedGenres] = useState(null);

  const handleSelectedGenres = (genres) => {
    setSelectedGenres(genres);
  };

  const selectedMovies = selectedGenres ? movies.filter((movie) => movie.genres.includes(selectedGenres)) : movies;

  return (
    <div className="category-page--wrapper">
      <SideMenu
        allGenres={allGenres}
        handleSelectedGenres={handleSelectedGenres}
      />
      <MovieGrid selectedGenres={selectedGenres} movies={selectedMovies} />
    </div>
  );
}

export default Category;
