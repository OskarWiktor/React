import {useParams} from "react-router-dom";

function SingleMovie({movies}) {
  const {formattedTitle} = useParams();

  const movie = movies.find(
    (movie) => movie.title.toLowerCase().replace(/[^a-z0-9-]+/g, "-") === formattedTitle
  );
  
  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
    </div>
  );
}

export default SingleMovie;
