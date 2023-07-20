import { BsFillChatHeartFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth } from "../Context/AuthContext";
import User from "../assets/Pictures/user.png";

export default function Profil() {
  const { isAdmin } = useAuth();
  const [informations, setInformations] = useState([]);
  const { token } = useAuth();
  const [msg, setMsg] = useState("Aucun upload effectué");
  const inputRef = useRef();

  const adminInfo = [
    {
      categorie: "AJOUTER UN ADMINISTRATEUR",
      route: "/ajouter-un-administrateur",
    },
    {
      categorie: "AJOUTER UN ARTICLE",
      route: "/ajouter-un-article",
    },
    {
      categorie: "VOIR LES UTILISATEURS",
      route: "/utilisateurs",
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

  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/api/avatar`,
      {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    )
      .then(() => {
        setMsg("Upload réussi veuillez recharger la page !");
      })
      .catch(() => {
        setMsg("Upload échoué !");
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
                <h1 style={{ marginBottom: "1rem" }} key={user.id}>
                  Hello {user.username} <BsFillChatHeartFill color="#db88ba" />
                </h1>
                {user && user.image ? (
                  <img
                    className="imageAvatar"
                    src={`${import.meta.env.VITE_BACKEND_URL}${user.image}`}
                    alt="Avatar"
                  />
                ) : (
                  <img className="imageAvatarDefaut" src={User} alt="Avatar" />
                )}
                <p>
                  <span>NOM & PRENOM</span>
                  {user.lastname} {user.firstname}
                </p>
              </div>
              <div className="username information">
                <p>
                  <span>NOM D'UTILISATEUR</span>
                  {user.username}
                </p>
              </div>
              <div className="mail information">
                <p>
                  <span>E-MAIL</span>
                  {user.mail}
                </p>
              </div>
              <div className="Image information">
                <span>CHANGER D'AVATAR</span>
                <form className="formImage" onSubmit={hSubmit}>
                  <input type="file" ref={inputRef} />
                  <p>{msg}</p>
                  <button className="buttonImage" type="submit">
                    Appliquer
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>

        {isAdmin === 1 && (
          <div className="profilUserInfo">
            <div>
              <div className="userInfo">
                <h2>Partie Administrateur</h2>
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
