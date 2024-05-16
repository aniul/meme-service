import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigation } from "./components/Navigation";
import { FavouritesMemesPage } from "./pages/FavouritesMemesPage";
import { HomePage } from "./pages/HomePage";
import { HotMemesPage } from "./pages/HotMemesPage";
import { RegularMemesPage } from "./pages/RegularMemesPage";
import { ErrorPage } from "./pages/ErrorPage";

import "./app.css";

const memeApiUrl = "https://meme-api.com/gimme/50";

function App() {
  const dispatch = useDispatch();

  // useEffect(
  //   () => async () => {
  //     try {
  //       await fetch(memeApiUrl)
  //         .then((response) => response.json())
  //         .then(({ memes }) => {
  //           dispatch({
  //             type: "UPDATE_MEMES",
  //             payload: memes.map((meme, index) => ({
  //               id: index,
  //               title: meme.title,
  //               sources: meme.preview,
  //               url: meme.url,
  //               upvotes: 0,
  //               downvotes: 0,
  //             })),
  //           });
  //         });
  //     } catch (error) {
  //       alert("Failed to fetch memes");
  //     }
  //   },
  //   [dispatch]
  // );

  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hot" element={<HotMemesPage />} />
            <Route path="/regular" element={<RegularMemesPage />} />
            <Route path="/favourites" element={<FavouritesMemesPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
