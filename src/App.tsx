import { BrowserRouter, Route, Routes } from "react-router-dom";
import MonoLithHeroBanner from "./components/MonoLithHeroBanner";
import MonolithStory from "./components/MonolithStory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MonoLithHeroBanner} />
        <Route path="/story-slider" Component={MonolithStory} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
