import { useSelector } from "react-redux";
import { Meme } from "../components/Meme";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const memes = useSelector((state) => state.memes);
  return (
    <div className={styles.home}>
      <h1>Meme of the day</h1>
      <Meme meme={memes[0]} />
    </div>
  );
};
