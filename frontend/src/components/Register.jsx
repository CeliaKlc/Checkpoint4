import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import PropTypes from "prop-types";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Register({ setIsLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isError, setIsError] = useState(false);

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
          }/users`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              lastname,
              firstname,
              username,
              password,
              email,
            }),
          }
        ).then((response) => {
          if (response.status === 201) {
            setIsLogin(true);
          } else {
            setIsError(true);
          }
        });
      }}
    >
      <h1>Inscription</h1>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
        className="form-line"
      >
        <InputLabel htmlFor="lastname">Nom</InputLabel>
        <Input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
        className="form-line"
      >
        <InputLabel htmlFor="firstname">Prénom</InputLabel>
        <Input
          type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </FormControl>
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
        <InputLabel htmlFor="email">Adresse Mail</InputLabel>
        <Input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      {isError && <p className="error-message">Erreur lors de l'inscription</p>}
      <button type="submit" className="submit-button">
        S'inscrire
      </button>
    </form>
  );
}

Register.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};
