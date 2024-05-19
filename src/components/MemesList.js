import { Meme } from "./Meme";
import styles from "./MemesList.module.scss";

export const MemesList = ({ memes }) => {
  return memes && memes.length ? (
    <ul className={styles.list}>
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
