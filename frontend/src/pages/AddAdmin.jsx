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
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AddAdmin({ setIsLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar />
      <section className="addAdminContain">
        <h1>Ajouter un administrateur</h1>
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
            <InputLabel htmlFor="username">Adresse Mail</InputLabel>
            <Input
              type="text"
              id="username"
              name="username"
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
          {isError && (
            <p className="error-message">Erreur lors de l'inscription</p>
          )}
          <button
            style={{ marginBottom: "2rem" }}
            type="submit"
            className="submit-button"
          >
            Inscrire un administrateur
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

AddAdmin.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};
