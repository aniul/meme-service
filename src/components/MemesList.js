import { Meme } from "./Meme";

export const MemesList = ({ memes }) => {
  return memes && memes.length ? (
    <ul>
      {memes.map((meme) => (
        <li key={meme.id}>
          <Meme meme={meme} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There is no memes here.</p>
  );
};
