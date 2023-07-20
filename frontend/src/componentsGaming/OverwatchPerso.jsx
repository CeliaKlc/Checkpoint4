import { useState } from "react";
import { BsFillShieldFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import Support from "../assets/Pictures/Overwatch/support.png";
import Tank from "../assets/Pictures/Overwatch/Tank.png";
import Dps from "../assets/Pictures/Overwatch/DPS.png";
import damage from "../assets/Pictures/Overwatch/damages.png";

export default function FloatingActionButtonZoom() {
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [activeButton, setActiveButton] = useState("tank");

  const handleClick = () => {
    setActiveButton("tank");
    setShowContent1(true);
    setShowContent2(false);
    setShowContent3(false);
  };

  const handleClick1 = () => {
    setActiveButton("dps");
    setShowContent1(false);
    setShowContent2(true);
    setShowContent3(false);
  };

  const handleClick2 = () => {
    setActiveButton("support");
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(true);
  };

  return (
    <section className="PersoContaine">
      <div className="buttonsPerso div2">
        <button
          type="button"
          onClick={handleClick}
          className={activeButton === "tank" ? "active" : "buttonTest"}
        >
          <BsFillShieldFill className="buttonRole" size={28} color="black" />
        </button>
        <button
          type="button"
          onClick={handleClick1}
          className={activeButton === "dps" ? "active" : "buttonTest"}
        >
          <img className="damages" src={damage} alt="Dégats" />
        </button>
        <button
          type="button"
          onClick={handleClick2}
          className={activeButton === "support" ? "active" : "buttonTest"}
        >
          <GiHealthNormal className="buttonRole" size={28} color="black" />
        </button>
      </div>
      <div className="persoDivParent div3">
        {showContent1 && (
          <div className="persosInfo">
            <div className="persosTest">
              <p className="TeSGF">
                <h2>TANK</h2>
                Les tanks sont là pour encaisser les dégâts et s’attaquer à des
                positions stratégiques, qu’il s’agisse d’ennemis groupés ou de
                points d’étranglement. Si vous êtes un tank, c’est à vous de
                mener la charge.
              </p>
              <img className="tankImage" src={Tank} alt=" " />
            </div>
          </div>
        )}
        {showContent2 && (
          <div className="persosInfo">
            <div className="persosTest">
              <p>
                <h2>DÉGÂTS</h2>
                Les spécialistes des dégâts traquent, attaquent et éliminent
                l’ennemi avec toutes sortes d’outils, de capacités et de styles
                de jeu. Redoutables mais fragiles, ces personnages ont besoin de
                renforts pour survivre.
              </p>
              <img className="dpsImage" src={Dps} alt=" " />
            </div>
          </div>
        )}
        {showContent3 && (
          <div className="persosInfo">
            <div className="persosTest">
              <p>
                <h2>SUPPORT</h2>
                Les personnages de soutien assistent leurs alliés en leur
                procurant des soins et des boucliers, en augmentant leurs dégâts
                et en neutralisant les menaces. Votre rôle de soutien vous rend
                indispensable à la survie de votre équipe.
              </p>
              <img className="supportImage" src={Support} alt=" " />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
