import { useSelector } from "react-redux";
import { MemesList } from "../components/MemesList";
import { getOnlyHotValues } from "../helpers.js";

export const HotMemesPage = () => {
  const hotMemes = useSelector((state) => state.memes).filter((meme) =>
    getOnlyHotValues(meme)
  );
  return (
    <div>
      <h1>Hot Memes</h1>
      <MemesList memes={hotMemes} />
    </div>
  );
};
