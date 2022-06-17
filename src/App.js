import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Search from "./pages/Search";

const Redirect = ({ to }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to)
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="credits" element={<Credits />} />
          <Route path="search" element={<Search />} /> */}
        </Route>
        <Route path="*" element={<Redirect to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
