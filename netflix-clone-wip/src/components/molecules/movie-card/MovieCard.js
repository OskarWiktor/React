import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayButton from "../../atoms/play-button/PlayButton";

function MovieCard(props) {
  const title = props.title;
  const year = props.year;
  const thumbnail = props.thumbnail;

  return (
    <div className="movie-card">
      <div className="movie-card__thumbnail">
        <img className="movie-card__thumbnail--img" src={thumbnail} />
      </div>
      <div className="movie-card__on-hover">
        <div className="movie-card__text">
          <h3 className="movie-card__text--title">{title}</h3>
          <p className="movie-card__text--year">{year}</p>
        </div>
        <div className="movie-card__icons">
          <PlayButton />
          <FavoriteIcon style={{ color: 'rgb(157, 0, 0)'}}/>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
