import { useDispatch } from "react-redux";
import ThumbUpIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDownAlt";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ProgressiveImg } from "./ProgressiveImg";
import styles from "./Meme.module.scss";

const iconStyle = { color: "#4169e2" };

export const Meme = ({ meme }) => {
  const dispatch = useDispatch();
  const upvoteMeme = () => {
    dispatch({
      type: "UPVOTE_MEME",
      payload: meme.id,
    });
  };
  const downvoteMeme = () => {
    dispatch({
      type: "DOWNVOTE_MEME",
      payload: meme.id,
    });
  };
  const toggleAsFavourite = () => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: meme.id,
    });
  };
  return (
    <figure className={styles.meme}>
      <div>
        <ProgressiveImg
          src={meme.preview[meme.preview.length - 1]}
          placeholderSrc={meme.preview[0]}
          alt={meme.title}
        />
      </div>
      <figcaption className="font-uppercase">{meme.title}</figcaption>
      <nav>
        <p>
          <button onClick={upvoteMeme}>
            <ThumbUpIcon style={iconStyle} />
          </button>
          <span>{meme.upvotes}</span>
        </p>
        <p>
          <button onClick={downvoteMeme}>
            <ThumbDownIcon style={iconStyle} />
          </button>
          <span>{meme.downvotes}</span>
        </p>
        <button onClick={toggleAsFavourite}>
          {meme.favourite ? (
            <StarIcon style={iconStyle} />
          ) : (
            <StarBorderIcon style={iconStyle} />
          )}
        </button>
      </nav>
    </figure>
  );
};
