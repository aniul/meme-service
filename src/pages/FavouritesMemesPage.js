import { useSelector } from "react-redux";
import { MemesList } from "../components/MemesList";

export const FavouritesMemesPage = () => {
  const favouritesMemes = useSelector((state) => state.memes).filter(
    (meme) => meme.favourite
  );
  return (
    <div>
      <h1>Favourites Memes Page</h1>
      <MemesList memes={favouritesMemes} />
    </div>
  );
};
