import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }} className="form-login">
      <h1>Inscription</h1>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
        className="form-line"
      >
        <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
        <Input type="text" id="username" name="username" />
      </FormControl>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
        className="form-line"
      >
        <InputLabel htmlFor="username">Adresse Mail</InputLabel>
        <Input type="text" id="username" name="username" />
      </FormControl>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
        className="form-line"
      >
        <InputLabel htmlFor="password">Mot de passe</InputLabel>
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <button type="submit" className="submit-button">
        S'inscrire
      </button>
    </Box>
  );
}
