import { useSelector } from "react-redux";
import { Meme } from "../components/Meme";
import styles from "./HomePage.module.scss";
import { getIntegerFromRange } from "../helpers.js";

export const HomePage = () => {
  const memes = useSelector((state) => state.memes);
  const randomMemeIndex = getIntegerFromRange(0, memes.length - 1);

  return (
    <div className={styles.home}>
      <h1>Meme of the day</h1>
      <Meme meme={memes[randomMemeIndex]} />
    </div>
  );
};
