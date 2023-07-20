import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { CgLogOut } from "react-icons/cg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function NavbarAccount() {
  const { token, setToken } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [informations, setInformations] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setInformations(data))
      .catch((error) => {
        console.error("Error fetching informations data:", error);
      });
  }, []);
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
                      id="tooltipAccount"
                      onClick={handleClick}
                      sx={{ ml: 2 }}
                      aria-controls={open ? "navbar-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      {informations && informations.image ? (
                        <img
                          src={`${import.meta.env.VITE_BACKEND_URL}${
                            informations.image
                          }`}
                          alt="Avatar"
                          style={{ width: "rem", height: "3.5rem" }}
                        />
                      ) : (
                        <Avatar sx={{ width: "3.5rem", height: "3.5rem" }} />
                      )}
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
                  <Link
                    style={{ color: "#333" }}
                    to="/"
                    onClick={() => setToken(null)}
                  >
                    <MenuItem style={{ gap: "0.5rem" }} onClick={handleClose}>
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
