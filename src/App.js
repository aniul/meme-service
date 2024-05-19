import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigation } from "./components/Navigation";
import { AddMemePage } from "./pages/AddMemePage";
import { FavouritesMemesPage } from "./pages/FavouritesMemesPage";
import { HomePage } from "./pages/HomePage";
import { HotMemesPage } from "./pages/HotMemesPage";
import { RegularMemesPage } from "./pages/RegularMemesPage";
import { ErrorPage } from "./pages/ErrorPage";

import "./styles/global.scss";

const memeApiUrl = "https://meme-api.com/gimme/50";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(memeApiUrl)
          .then((response) => response.json())
          .then(({ memes }) => {
            if (memes && memes.length)
              dispatch({
                type: "UPDATE_MEMES",
                payload: memes.map((meme, index) => ({
                  id: index,
                  title: meme.title,
                  preview: meme.preview,
                  upvotes: 0,
                  downvotes: 0,
                  favourite: false,
                })),
              });
          });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        {!isLoading ? (
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hot" element={<HotMemesPage />} />
              <Route path="/regular" element={<RegularMemesPage />} />
              <Route path="/favourites" element={<FavouritesMemesPage />} />
              <Route path="/add-meme" element={<AddMemePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        ) : null}
      </BrowserRouter>
    </div>
  );
}

export default App;
