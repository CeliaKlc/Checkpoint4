import Carrousel from "../components/Carrousel";
import Navbar from "../components/Navbar";
import Chat from "../assets/Pictures/choquee.png";
import GirlGamer from "../assets/Pictures/rire.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="homeContain">
        <h1>Accueil</h1>
        <Carrousel />
        <div className="homediv">
          <h3>Bienvenue chez KDestraz Gaming</h3>
          <img className="homedivChat" src={Chat} alt="" />
          <p>
            À l'origine créé pour un devoir dans le domaine du développement
            web, ce blog ne possédait que peu de potentiel. Cependant, au fil du
            temps, il a connu des améliorations significatives, et me voilà
            aujourd'hui avec un grand nombre de visiteurs ! Ici, je parle de
            jeux, que ce soit au niveau des actualités ou de mon expérience en
            tant que joueuse féminine. Ce blog s'est progressivement transformé
            en une plateforme solide et engagée où je partage ma passion pour
            les jeux vidéos et où je mets en avant mon expérience unique.
          </p>
        </div>

        <div className="homediv">
          <h3>Pourquoi un blog qui parle Gaming ?</h3>
          <p>
            Depuis mon enfance, j'ai toujours aimé jouer à une variété de jeux,
            et j'ai trouvé particulièrement enrichissant de partager mes
            expériences de jeu avec vous tous. À travers ce blog, je souhaite
            vous faire part de mes aventures de gameuse et peut-être même créer
            des moments inoubliables si jamais nous avons l'occasion de nous
            rencontrer dans un jeu ! Je crois fermement en la puissance du jeu
            vidéo pour rassembler les gens, et je suis ravie de pouvoir établir
            une connexion avec vous, en partageant mes réflexions, mes
            découvertes et mes joies en tant que joueuse. Ce blog est mon espace
            dédié où je peux exprimer ma passion pour les jeux vidéo et tisser
            des liens avec une communauté animée par la même passion. J'espère
            sincèrement que vous trouverez ici des contenus intéressants et
            inspirants, et que nous pourrons créer ensemble une expérience
            unique et mémorable.
            <img className="homedivGG" src={GirlGamer} alt="" />
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
