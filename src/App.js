import "./App.css";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { HotMemesPage } from "./pages/HotMemesPage";
import { RegularMemesPage } from "./pages/RegularMemesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hot" element={<HotMemesPage />} />
            <Route path="/regular" element={<RegularMemesPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
