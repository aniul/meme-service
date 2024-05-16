import { useSelector } from "react-redux";
import { Meme } from "../components/Meme";

export const HomePage = () => {
  const memes = useSelector((state) => state.memes);
  return (
    <>
      <h1>Have a little laugh with memes!</h1>
      <p>Meme of the day</p>
      <Meme meme={memes[Math.floor(Math.random() * memes.length)]} />
    </>
  );
};
