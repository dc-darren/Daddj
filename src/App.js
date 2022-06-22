import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="credits" element={<Credits />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="*" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
