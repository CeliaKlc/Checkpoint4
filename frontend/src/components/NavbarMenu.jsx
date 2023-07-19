import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { CgMenuRightAlt, CgLogOut } from "react-icons/cg";
import { useState } from "react";
import { RiHomeHeartLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    color: "#333",
    gap: "0.5rem",
  };

  return (
    <nav>
      <Box>
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
        <Link style={{ color: "#333" }} to="/profil">
          <MenuItem onClick={handleClose}>
            <Avatar /> Mon compte
          </MenuItem>
        </Link>
        <Divider />
        <Link style={styles} to="/accueil">
          <MenuItem style={styles} onClick={handleClose}>
            <RiHomeHeartLine size={25} /> Accueil
          </MenuItem>
        </Link>
        <Link style={styles} to="/contact">
          <MenuItem style={styles} onClick={handleClose}>
            <GrContact size={20} />
            Contact
          </MenuItem>
        </Link>
        <Divider />
        <Link style={styles} to="/jeux/among-us">
          <MenuItem style={styles} onClick={handleClose}>
            Among Us
          </MenuItem>
        </Link>
        <Link style={styles} to="/famille-royal">
          <MenuItem style={styles} onClick={handleClose}>
            Overwatch
          </MenuItem>
          <Link style={styles} to="/royaux-actif">
            <MenuItem style={styles} onClick={handleClose}>
              Sims 4
            </MenuItem>
          </Link>
        </Link>
        <Link style={styles} to="/royaux-actif">
          <MenuItem style={styles} onClick={handleClose}>
            Valorant
          </MenuItem>
        </Link>
        <Divider />
        <Link style={styles} to="/">
          <MenuItem style={styles} onClick={handleClose}>
            <CgLogOut size={25} />
            Déconnexion
          </MenuItem>
        </Link>
      </Menu>
    </nav>
  );
}
