import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function HeroSlide(props) {
  const { title, genres, thumbnail, description } = props;

  const shortDescription = (description) => {
    const maxLength = 280;
    if (description.length > maxLength) {
        return description.substring(0, maxLength) + "...";
      }
      return description;
  }

  //ToDo 1. add read more, if description > 280, with button that show movie page with whole description, cast and so on

  return (
    <div className="hero-slide" style={{backgroundImage: `url(${thumbnail})`}}>
      <div className="hero-slide--background">
        <div className="hero-slide__text">
          <p className="hero-slide__text--genre">{genres}</p>
          <h2 className="hero-slide__text--title">{title}</h2>
          <p className="hero-slide__text--description">{shortDescription(description)}</p>
          <div className="hero-slide--icons">
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
