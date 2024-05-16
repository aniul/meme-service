import { Meme } from "./Meme";

export const MemesList = ({ memes }) => {
  return memes && memes.length ? (
    <ul>
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </ul>
  ) : (
    <p>There is no memes here.</p>
  );
};
