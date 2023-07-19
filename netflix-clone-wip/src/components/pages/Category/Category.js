import SideMenu from "../../organisms/SideMenu/SideMenu";
import MovieGrid from "../../organisms/MovieGrid/MovieGrid";

function Category() {
  return (
    <div className="category-page--wrapper">
      <SideMenu />
      <MovieGrid />
    </div>
  );
}

export default Category;
