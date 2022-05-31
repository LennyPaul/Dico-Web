import "./css/reset.scss";
import "./css/App.scss";
import "./css/home.scss";
import "./css/search.scss";
import "./css/definition.scss";
import { Home } from "./components/Home.jsx";
import { Search } from "./components/Search.jsx";
import { Definition } from "./components/Definition.jsx";
import { Definitions } from "./components/Definitions.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="definition" element={<Definition />} />
      <Route path="definitions" element={<Definitions />} />
    </Routes>
  );
}

export default App;
