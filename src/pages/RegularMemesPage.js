import { useSelector } from "react-redux";
import { MemesList } from "../components/MemesList";
import { getOnlyHotValues } from "../helpers.js";

export const RegularMemesPage = () => {
  const regularMemes = useSelector((state) => state.memes).filter(
    (meme) => !getOnlyHotValues(meme)
  );
  return (
    <div>
      <h1>Regular Memes</h1>
      <MemesList memes={regularMemes} />
    </div>
  );
};
