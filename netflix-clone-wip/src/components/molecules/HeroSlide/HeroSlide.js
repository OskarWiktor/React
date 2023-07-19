import LikeButton from "../../atoms/LikeButton/LikeButton";
import PlayButton from "../../atoms/PlayButton/PlayButton";

function HeroSlide(props) {
  const {title, genres, thumbnail, description} = props;

  const shortDescription = (description) => {
    const maxLength = 280;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };
  //ToDo 1. add read more, if description > 280, with button that show movie page with whole description, cast and so on

  const genresWithSpace = genres.join(" ");

  return (
    <div className="hero-slide" style={{backgroundImage: `url(${thumbnail})`}}>
      <div className="hero-slide--background">
        <div className="hero-slide__text">
          <p className="hero-slide__text--genre">{genresWithSpace}</p>
          <h2 className="hero-slide__text--title">{title}</h2>
          <p className="hero-slide__text--description">
            {shortDescription(description)}
          </p>
          <div className="hero-slide--icons">
            <PlayButton>Play</PlayButton>
            <LikeButton />
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
