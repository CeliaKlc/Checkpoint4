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
import { useAuth } from "../Context/AuthContext";

export default function NavbarMenu() {
  const [token, setToken] = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="header">
      <nav>
        <ul>
          <li>
            {token == null ? (
              <Link to="/" />
            ) : (
              <>
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
                  <Link to="/accueil">
                    <MenuItem onClick={handleClose}>
                      <RiHomeHeartLine size={25} /> Accueil
                    </MenuItem>
                  </Link>
                  <Link to="/contact">
                    <MenuItem onClick={handleClose}>
                      <GrContact size={20} />
                      Contact
                    </MenuItem>
                  </Link>
                  <Divider />
                  <Link to="/jeux/among-us">
                    <MenuItem onClick={handleClose}>Among Us</MenuItem>
                  </Link>
                  <Link to="/jeux/:id">
                    <MenuItem onClick={handleClose}>Overwatch</MenuItem>
                    <Link to="/jeux/:id">
                      <MenuItem onClick={handleClose}> Sims 4</MenuItem>
                    </Link>
                  </Link>
                  <Link to="/jeux/:id">
                    <MenuItem onClick={handleClose}>Valorant</MenuItem>
                  </Link>
                  <Divider />
                  <Link
                    style={{ color: "#333" }}
                    to="/"
                    onClick={() => setToken(null)}
                  >
                    <MenuItem onClick={handleClose}>
                      <CgLogOut size={25} />
                      Déconnexion
                    </MenuItem>
                  </Link>
                </Menu>
              </>
            )}
          </li>
        </ul>
      </nav>
    </nav>
  );
}
