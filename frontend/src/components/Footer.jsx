import Enjo from "../assets/Pictures/KDGaming.png";

export default function Footer() {
  return (
    <footer>
      <div className="footerContain">
        <div className="speak">
          <span className="footerSpan">KDestraz Gaming</span>
          <img src={Enjo} alt="" />
        </div>
        <div className="speak">
          <span className="footerSpan">Sommaire</span>
          <span className="footerSommaire">
            <ul>
              <li>Lorem 1</li>
              <li>Lorem 2</li>
              <li>Lorem 3</li>
            </ul>
          </span>
        </div>
        <div className="speak">
          <span className="footerSpan">Envie de parler ?</span>
          <iframe
            src="https://discord.com/widget?id=1050350893771530270&theme=dark"
            title="Envie de parler ?"
            width="350"
            height="300"
            frameBorder="0"
          />
        </div>
      </div>
      <span>© 2023 KDestrazGaming par KDestraz – Tous droits réservés.</span>
      <span>
        Les contenus de ce site m’appartiennent (sauf mention contraire dans
        l’article). Merci de me contacter ou mettre un lien vers mon site si
        vous souhaitez les utiliser.
      </span>
    </footer>
  );
}
