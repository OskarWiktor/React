import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function HeroSlide(props) {
  const title = props.title;
  const genre = props.genres;
  const thumbnail = props.thumbnail;
  const description = props.extract;

  return (
    <div className="hero-slide" style={{backgroundImage: `url(${thumbnail})`}}>
      <div className="hero-slide--background">
        <div className="hero-slide__text">
          <p className="hero-slide__text--genre">{genre}</p>
          <h2 className="hero-slide__text--title">{title}</h2>
          <p className="hero-slide__text--description">{description}</p>
          <div>
            <PlayArrowIcon style={{color: "white"}} />
            <FavoriteIcon style={{color: "rgb(157, 0, 0)"}} />
          </div>
        </div>

        <div className="hero-slide__thumbnail">
          <img className="hero-slide__thumbnail--img" src={thumbnail} />
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
