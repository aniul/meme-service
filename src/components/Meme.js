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
  return (
    <li>
      <figure>
        <a href={meme.url} title={meme.title} target="_blank" rel="noreferrer">
          <picture>
            <source media="(min-width:1920px)" srcSet={meme.preview[2]} />
            <source media="(min-width:1080px)" srcSet={meme.preview[1]} />
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
      </figure>
    </li>
  );
};
