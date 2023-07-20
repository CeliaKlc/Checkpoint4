import { useState } from "react";
import Support from "../assets/Pictures/Overwatch/support.png";

export default function FloatingActionButtonZoom() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <section className="buttonPerso">
      <button type="button" onClick={handleClick}>
        Support
      </button>
      {showContent && (
        <div>
          <p>
            Les tanks sont là pour encaisser les dégâts et s’attaquer à des
            positions stratégiques, qu’il s’agisse d’ennemis groupés ou de
            points d’étranglement. Si vous êtes un tank, c’est à vous de mener
            la charge.
          </p>
          <img src={Support} alt=" " />
        </div>
      )}
    </section>
  );
}
