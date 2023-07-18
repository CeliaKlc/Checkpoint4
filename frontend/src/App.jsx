import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Connection from "./pages/Connection";
import AmongUs from "./pages/AmongUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jeux/among-us" element={<AmongUs />} />
      </Routes>
    </div>
  );
}

export default App;
