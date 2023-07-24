import SideMenu from "../../organisms/SideMenu/SideMenu";
import MovieGrid from "../../organisms/MovieGrid/MovieGrid";

function Category({ movies }) {
  return (
    <div className="category-page--wrapper">
      <SideMenu />
      <MovieGrid movies={movies}/>
    </div>
  );
}

export default Category;
