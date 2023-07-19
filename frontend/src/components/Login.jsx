import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="form-login"
      onSubmit={(event) => {
        event.preventDefault();
        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/login`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.token !== null) {
              setToken(data.token);
              navigate("/accueil");
            }
          });
      }}
    >
      <h1>Connexion</h1>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
        className="form-line"
      >
        <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
        <Input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
        className="form-line"
      >
        <InputLabel htmlFor="password">Mot de passe</InputLabel>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        Se connecter
      </button>
    </form>
  );
}
