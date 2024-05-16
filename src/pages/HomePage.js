import { useSelector } from "react-redux";
import { MemesList } from "../components/MemesList";

export const HomePage = () => {
  const memes = useSelector((state) => state.memes);
  return <MemesList memes={memes} />;
};
