import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Connection from "./pages/Connection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/accueil" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
