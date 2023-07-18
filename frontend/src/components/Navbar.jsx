import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import KDG from "../assets/Pictures/KDGaming.png";
import NavbarMenu from "./NavbarMenu";
import NavbarGaming from "./NavbarGaming";
import NavbarAccount from "./NavbarAccount";

export default function Navbar() {
  return (
    <header id="containerNavbar">
      <Box id="headerNavbar">
        <Link to="/accueil">
          <img src={KDG} alt="Logo" />
        </Link>
        <Link className="linkNavbar" to="/accueil">
          Accueil
        </Link>
        <NavbarGaming />
        <Link className="linkNavbar" to="/contact">
          Me contacter
        </Link>
        <NavbarAccount />
        <NavbarMenu />
      </Box>
    </header>
  );
}
