import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Connection from "./pages/Connection";
import AmongUs from "./pages/AmongUs";
import Contact from "./pages/Contact";
import Profil from "./pages/Profil";
import AddAdmin from "./pages/AddAdmin";
import { useAuth } from "./Context/AuthContext";

function App() {
  const { token } = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Connection />} />
        {token != null && (
          <>
            <Route path="/accueil" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/jeux/among-us" element={<AmongUs />} />
            <Route path="/ajouter-un-administrateur" element={<AddAdmin />} />
          </>
        )}
        <Route path="*" element={<Connection />} />
      </Routes>
    </div>
  );
}

export default App;
