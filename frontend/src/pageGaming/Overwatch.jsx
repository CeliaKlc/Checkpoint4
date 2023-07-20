import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OverwatchPerso from "../componentsGaming/OverwatchPerso";
import Player from "../assets/Pictures/Overwatch/player.jpg";
import Combat from "../assets/Pictures/Overwatch/Combats.jpg";
import CrossPlay from "../assets/Pictures/Overwatch/joueurs.jpg";
import OverwatchCartes from "../componentsGaming/OverwatchCartes";
import Note from "../components/Note";

const dataFight = [
  {
    picture: Player,
    title: "Jeu Gratuit",
    caption:
      "Overwatch 2 est un jeu en accès gratuit.Faites équipe avec vos ami(e)s quelle que soit leur plateformefavorite.",
  },
  {
    picture: Combat,
    title: "Une multitudes de personnages",
    caption:
      "Que vous soyez du genre à mener la charge, à tendre des embuscades ou à soutenir votre équipe, vous trouverez forcément un personnage qui vous plaira.",
  },
  {
    picture: CrossPlay,
    title: "Cross-play",
    caption:
      "Jouez sur plusieurs plateformes et appareils, et retrouvez vos objets, votre progression et vos récompenses à tout moment, où que vous soyez.",
  },
];

export default function Overwatch() {
  const [note, setNote] = useState(5);

  return (
    <>
      <Navbar />
      <section className="gamingContain">
        <h1>Overwatch 2</h1>
        <h2 className="h2ow">5 VS 5</h2>
        <div className="resumeOw">
          {dataFight.map((fight) => (
            <div className="resumeOw1" key={fight.title}>
              <img src={fight.picture} alt={fight.title} />
              <caption>
                <h3>{fight.title}</h3>
                {fight.caption}
              </caption>
            </div>
          ))}
        </div>
        <h2>Les Rôles</h2>
        <div className="resumeOw">
          <div className="resumeOw2">
            <OverwatchPerso />
          </div>
        </div>
        <h2 className="h2ow">Les Cartes</h2>
        <div className="resumeOw">
          <div className="resumeOw3">
            <OverwatchCartes />
          </div>
        </div>
        <div className="resumeOw resumeOw4">
          <div className="conclusion">
            <p>
              <h2>Conclusion</h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda dolores ex beatae aperiam iste voluptas animi architecto
              dolorem impedit ratione.
            </p>
            <Note note={note} setNote={setNote} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
