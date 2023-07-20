import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Connection from "./pages/Connection";
import AmongUs from "./pageGaming/AmongUs";
import Contact from "./pages/Contact";
import Profil from "./pages/Profil";
import AddAdmin from "./pages/AddAdmin";
import { useAuth } from "./Context/AuthContext";
import ViewUser from "./pages/ViewUser";
import AddSection from "./pages/AddSection";
import Overwatch from "./pageGaming/Overwatch";
import Sims4 from "./pageGaming/Sims4";
import Valo from "./pageGaming/Valo";

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
            <Route path="/ajouter-un-administrateur" element={<AddAdmin />} />
            <Route path="/utilisateurs" element={<ViewUser />} />
            <Route path="/ajouter-un-article" element={<AddSection />} />
            {/* Routes PAGEGAMING */}
            <Route path="/jeux/among-us" element={<AmongUs />} />
            <Route path="/jeux/overwatch" element={<Overwatch />} />
            <Route path="/jeux/sims4" element={<Sims4 />} />
            <Route path="/jeux/valo" element={<Valo />} />
          </>
        )}
        <Route path="*" element={<Connection />} />
      </Routes>
    </div>
  );
}

export default App;
