import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import AG from "../assets/Pictures/AmongUs.png";
import Ow from "../assets/Pictures/Overwatch.png";
import Valo from "../assets/Pictures/Valorant.png";
import Sims from "../assets/Pictures/Sims.png";

export default function Carrousel() {
  const datas = [
    {
      id: "1",
      legend: "Among Us",
      picture: AG,
      link: "/jeux/among-us",
    },
    {
      id: "2",
      legend: "Overwatch",
      picture: Ow,
      link: " ",
    },
    {
      id: "3",
      legend: "Valorant",
      picture: Valo,
      link: " ",
    },
    {
      id: "4",
      legend: "Les Sims 4",
      picture: Sims,
      link: " ",
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
        <Link to={data.link} key={data.id}>
          <div>
            <img src={data.picture} alt=" " />
            <div className="overlay">
              <h2 className="overlay-title">{data.legend}</h2>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}
