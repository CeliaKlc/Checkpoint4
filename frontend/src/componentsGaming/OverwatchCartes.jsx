import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import map1 from "../assets/Pictures/Overwatch/Map1.png";
import map2 from "../assets/Pictures/Overwatch/Map2.png";
import map3 from "../assets/Pictures/Overwatch/Map3.png";
import map4 from "../assets/Pictures/Overwatch/Map4.png";
import map5 from "../assets/Pictures/Overwatch/Map5.png";
import map6 from "../assets/Pictures/Overwatch/Map6.png";
import map7 from "../assets/Pictures/Overwatch/Map7.png";
import map8 from "../assets/Pictures/Overwatch/Map8.png";

export default function OverwatchCartes() {
  const datas = [
    {
      id: "1",
      legend: "AVANCEE",
      picture: map1,
      description:
        "Les équipes s'affrontent pour prendre le contrôle d'un robot et le faire avancer jusqu'à la base ennemie.",
    },
    {
      id: "2",
      legend: "CONTRÔLE",
      picture: map2,
      description:
        "Les équipes s’affrontent pour le contrôle d’un seul objectif. La première équipe qui gagne deux manches remporte la partie. ",
    },
    {
      id: "3",
      legend: "ESCORTE",
      picture: map3,
      description:
        "Une équipe escorte un convoi jusqu’à un point de livraison pendant que l’autre tente de l’en empêcher. ",
    },
    {
      id: "4",
      legend: "HYBRIDE",
      picture: map4,
      description:
        "L’équipe en attaque capture un convoi avant de l’escorter jusqu’à sa destination pendant que l’équipe en défense tente de l’en empêcher. ",
    },
    {
      id: "5",
      legend: "CAPTURE DE DRAPEAU",
      picture: map5,
      description:
        "Les équipes s’affrontent pour capturer le drapeau adverse tout en défendant le leur. ",
    },
    {
      id: "6",
      legend: "ELIMINATION",
      picture: map6,
      description:
        "Éliminez tous les adversaires pour remporter la manche. Gagnez trois manches pour remporter la partie. Disponible pour des équipes d’un, trois ou six joueurs et joueuses. ",
    },
    {
      id: "7",
      legend: "COMBAT A MORT",
      picture: map7,
      description:
        "Tentez de cumuler 20 points avant tout le monde en éliminant vos adversaires ; c’est chacun pour soi ! ",
    },
    {
      id: "8",
      legend: "COMBAT A MORT PAR EQUIPE",
      picture: map8,
      description:
        "Faites équipe et triomphez de vos adversaires en réussissant le plus d’éliminations possible. ",
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={9000}
      infiniteLoop
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      className="carouselContainer"
    >
      {datas.map((data) => (
        <div key={data.id}>
          <img src={data.picture} alt=" " />
          <div className="overlay">
            <h2 className="overlay-title">{data.legend}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
