import { useState } from "react";
import KDG from "../assets/Pictures/KDGaming.png";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Connection() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="registerContainer">
      <img src={KDG} alt="Logo" />
      <div className="registerDiv">
        <div className="connection-menu">
          <button
            className={isLogin ? "selected-button" : "default-button"}
            type="button"
            onClick={() => setIsLogin(true)}
          >
            Connexion
          </button>
          <button
            className={!isLogin ? "selected-button" : "default-button"}
            type="button"
            onClick={() => setIsLogin(false)}
          >
            Inscription
          </button>
        </div>
        <div className="form-content">
          {isLogin ? <Login /> : <Register setIsLogin={setIsLogin} />}
        </div>
      </div>
    </section>
  );
}
