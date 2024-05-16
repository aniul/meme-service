import { useDispatch } from "react-redux";

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
    <figure>
      <a href={meme.url} title={meme.title} target="_blank" rel="noreferrer">
        <picture>
          {meme.preview.length >= 2 && (
            <source media="(min-width:1920px)" srcSet={meme.preview[2]} />
          )}
          {meme.preview.length >= 1 && (
            <source media="(min-width:1080px)" srcSet={meme.preview[1]} />
          )}
          <img src={meme.preview[0]} alt={meme.title} />
        </picture>
      </a>
      <figcaption>{meme.title}</figcaption>
      <p>
        <span>{meme.upvotes} upvotes</span>
        <button onClick={upvoteMeme}>upvote</button>
      </p>
      <p>
        <span>{meme.downvotes} downvotes</span>
        <button onClick={downvoteMeme}>downvote</button>
      </p>
      <button onClick={toggleAsFavourite}>favourite!</button>
    </figure>
  );
};
