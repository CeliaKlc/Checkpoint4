import { BsFillChatHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth } from "../Context/AuthContext";

export default function Profil() {
  const { isAdmin } = useAuth();
  const [informations, setInformations] = useState([]);
  const { token } = useAuth();

  const adminInfo = [
    {
      categorie: "AJOUTER UN ADMINISTRATEUR",
      route: "/ajouter-un-administrateur",
    },
    {
      categorie: "AJOUTER UN ARTICLE",
      route: "/",
    },
    {
      categorie: "VOIR LES UTILISATEURS",
      route: "/",
    },
  ];

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
        {isAdmin !== 1 && (
          <>
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
            </div>
          </>
        )}

        {isAdmin === 1 && (
          <div className="profilUserInfo">
            <div>
              {informations.map((user) => (
                <h1 style={{ marginBottom: "1rem" }} key={user.id}>
                  Hello {user.username} <BsFillChatHeartFill color="#db88ba" />
                </h1>
              ))}
              <div className="userInfo">
                {adminInfo.map((info) => (
                  <div className="firstname information">
                    <Link style={{ color: "#333" }} to={info.route}>
                      <p>
                        <span>
                          {info.categorie} <BiChevronsRight />
                        </span>
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
