import { Link } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";
import KDG from "../assets/Pictures/KDGaming.png";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header id="containerNavbar">
      <Box id="headerNavbar">
        <Link to="/">
          <img src={KDG} alt="Logo" />
        </Link>
        <Link className="linkNavbar" to="/">
          Accueil
        </Link>
        <Link className="linkNavbar" to="/famille-royal">
          Overwatch
        </Link>
        <Link className="linkNavbar" to="/royaux-actif">
          Valorant
        </Link>
        <Link className="linkNavbar" to="/royaux-actif">
          Sims 4
        </Link>
        <Link className="linkNavbar" to="/nous-contactez">
          Me contacter
        </Link>
        <Tooltip title="menu">
          <IconButton
            id="tooltipNavbar"
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "navbar-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <CgMenuRightAlt size={20} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="navbar-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Accueil</MenuItem>
        </Link>
        <Link to="/famille-royal">
          <MenuItem onClick={handleClose}>Overwatch</MenuItem>
        </Link>
        <Link to="/royaux-actif">
          <MenuItem onClick={handleClose}>Valorant</MenuItem>
        </Link>
        <Link to="/royaux-actif">
          <MenuItem onClick={handleClose}>Sims 4</MenuItem>
        </Link>
        <Link to="/nous-contactez">
          <MenuItem onClick={handleClose}>Me contacter</MenuItem>
        </Link>
      </Menu>
    </header>
  );
}
