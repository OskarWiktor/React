import FavoriteIcon from "@mui/icons-material/Favorite";

//ToDo 1. onClick => addFavorite change icon color to $accent-color

function LikeButton({onClick}) {
    return (
        <button className="like-btn" onClick={onClick}>
          <FavoriteIcon style={{ color: 'rgb(162, 162, 162)'}}/>
        </button>
    )
}

export default LikeButton;