import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

export default function NavbarGaming() {
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
  };

  return (
    <>
      <Box>
        <Tooltip title="menu">
          <IconButton
            id="tooltipGaming"
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "navbar-gaming" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <span className="tooltip-gaming-title">
              Jeux <BsChevronDown size={12} color="black" />
            </span>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="navbar-gaming"
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
        <Link style={styles} to="/jeux/among-us">
          <MenuItem onClick={handleClose}>Among us</MenuItem>
        </Link>
        <Link style={styles} to="/jeux/:id">
          <MenuItem onClick={handleClose}>Overwatch</MenuItem>
        </Link>
        <Link style={styles} to="/jeux/:id">
          <MenuItem onClick={handleClose}>Sims 4</MenuItem>
        </Link>
        <Link style={styles} to="/jeux/:id">
          <MenuItem onClick={handleClose}>Valorant</MenuItem>
        </Link>
      </Menu>
    </>
  );
}
