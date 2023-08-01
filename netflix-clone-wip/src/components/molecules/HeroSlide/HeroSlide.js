import LikeButton from "../../atoms/LikeButton/LikeButton";
import PlayButton from "../../atoms/PlayButton/PlayButton";
import {Link} from "react-router-dom";

function HeroSlide(props) {
  const {title, genres, thumbnail, description} = props;

  const shortDescription = (description) => {
    const maxLength = 200;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const genresWithSpace = genres.join(" ");

  const formattedTitle = title.toLowerCase().replace(/[^a-z0-9-]+/g, "-");

  return (
    <div className="hero-slide" style={{backgroundImage: `url(${thumbnail})`}}>
      <div className="hero-slide--background">
        <div className="hero-slide__text">
          <p className="hero-slide__text--genre">{genresWithSpace}</p>
          <h2 className="hero-slide__text--title">{title}</h2>
          <p className="hero-slide__text--description">
            {shortDescription(description)}
            <Link to={`/${formattedTitle}`}>
              <p className="hero-slide__text--read-more">read more</p>
            </Link>
          </p>
          <div className="hero-slide--icons">
            <Link to={`/${formattedTitle}`}>
              <PlayButton>Play</PlayButton>
            </Link>
            <LikeButton />
          </div>
        </div>

        <div className="hero-slide__thumbnail">
          <img
            alt={`${title} movie`}
            className="hero-slide__thumbnail--img"
            src={thumbnail}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
