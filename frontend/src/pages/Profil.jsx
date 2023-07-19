import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth } from "../Context/AuthContext";

export default function Profil() {
  const { isAdmin } = useAuth();
  const [informations, setInformations] = useState([]);
  const { token } = useAuth();

  const fetchInformationsData = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setInformations([data]))
      .catch((error) => {
        console.error("Error fetching informations data:", error);
      });
  };

  useEffect(() => {
    fetchInformationsData();
  }, []);
  return (
    <>
      <Navbar />
      <section className="profilContain">
        <h1>Mon compte</h1>
        <div className="profilUserInfo">
          <h2>Vos informations</h2>
          {informations.map((user) => (
            <div key={user.id} className="userInfo">
              <div className="firstname information">
                <p>
                  <span>NOM & PRENOM</span>
                  {user.lastname} {user.firstname}
                </p>
              </div>
              <div className="Username information">
                <p>
                  <span>NOM D'UTILISATEUR</span>
                  {user.username}
                </p>
              </div>
              <div className="Mail information">
                <p>
                  <span>E-MAIL</span>
                  {user.mail}
                </p>
              </div>
            </div>
          ))}

          {isAdmin === 1 && (
            <div className="firstname information">
              <p>HEY</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
