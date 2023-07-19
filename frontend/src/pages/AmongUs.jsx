import { useState } from "react";
import Navbar from "../components/Navbar";
import Interface from "../assets/Pictures/Among-Us/Interface.png";
import Impo from "../assets/Pictures/Among-Us/Imposteur.jpeg";
import Inventaire from "../assets/Pictures/Among-Us/Inventaire.png";
import Footer from "../components/Footer";
import Note from "../components/Note";

export default function AmongUs() {
  const [note, setNote] = useState(4.5);

  const datasLeft = [
    {
      title: "Le but du jeu",
      paragraphe:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harumeveniet tempore repellendus explicabo mollitia sunt nisi omnis exercitationem officiis fugiat.",
      picture: Interface,
      class: "resume resume1",
    },
    {
      title: "C'est toi l'imposteur !",
      paragraphe:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harumeveniet tempore repellendus explicabo mollitia sunt nisi omnis exercitationem officiis fugiat.",
      picture: Impo,
      class: "resume resume1",
    },
    {
      title: "Jouons à cache-cache !",
      paragraphe:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harumeveniet tempore repellendus explicabo mollitia sunt nisi omnis exercitationem officiis fugiat.",
      picture: Inventaire,
      class: "resume resume1",
    },
  ];

  const datasRight = [
    {
      title: "Un système d'inventaire",
      paragraphe:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harumeveniet tempore repellendus explicabo mollitia sunt nisi omnis exercitationem officiis fugiat.",
      picture: Inventaire,
      class: "resume resume2",
    },
    {
      title: "Conclusion",
      paragraphe:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harumeveniet tempore repellendus explicabo mollitia sunt nisi omnis exercitationem officiis fugiat.",
      picture: null,
      class: "resume resume2 conclusion",
      note: <Note note={note} setNote={setNote} />,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="gamingContain">
        <h1>Among Us</h1>
        {datasLeft.map((left) => (
          <div className={left.class} key={left.title}>
            {left.picture != null ? (
              <img src={left.picture} alt={left.title} />
            ) : (
              " "
            )}
            <p>
              <h2>{left.title}</h2>
              {left.paragraphe}
            </p>
          </div>
        ))}

        {datasRight.map((right) => (
          <div className={right.class} key={right.title}>
            <p>
              <h2>{right.title}</h2>
              {right.paragraphe}
            </p>
            {right.picture != null ? (
              <img src={right.picture} alt={right.title} />
            ) : (
              " "
            )}
            {right.note}
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
