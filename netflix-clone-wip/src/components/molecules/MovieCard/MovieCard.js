import PlayButton from "../../atoms/PlayButton/PlayButton";
import LikeButton from "../../atoms/LikeButton/LikeButton";
import {Link} from "react-router-dom";

function MovieCard(props) {
  const title = props.title;
  const year = props.year;
  const thumbnail = props.thumbnail;

  const formattedTitle = title.replace(/\s+/g, "-");
  
  return (
    <div className="movie-card">
      <div className="movie-card__thumbnail">
        <img
          alt={`${title} movie from ${year}`}
          className="movie-card__thumbnail--img"
          src={thumbnail}
        />
      </div>
      <div className="movie-card__on-hover">
        <div className="movie-card__text">
          <h3 className="movie-card__text--title">{title}</h3>
          <p className="movie-card__text--year">{year}</p>
        </div>
        <div className="movie-card__icons">
          <Link to={`/${formattedTitle}`}>
            <PlayButton />
          </Link>
          <LikeButton />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
