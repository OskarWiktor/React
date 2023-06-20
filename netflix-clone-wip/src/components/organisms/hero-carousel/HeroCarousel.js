import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function HeroCarousel({ movies }) {
  const title = movies.title;
  const genre = movies.genre;
  const thumbnail = movies.thumbnail;
  const description = movies.extract;

  return (
    <section className="hero-carousel">
      <img src={thumbnail} />
      <p>{genre}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <PlayArrowIcon style={{color: "white"}} />
        <FavoriteIcon style={{color: "rgb(157, 0, 0)"}} />
      </div>
    </section>
  );
}

export default HeroCarousel;
