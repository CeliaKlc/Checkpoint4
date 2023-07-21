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
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuth } from "../Context/AuthContext";

export default function AddAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [msg, setMsg] = useState(" ");
  const { token } = useAuth();

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
              }/admins`,
              {
                method: "post",
                headers: {
                  "content-type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                  firstname,
                  lastname,
                  username,
                  password,
                  email,
                }),
              }
            )
              .then(() => {
                setMsg("Admin enregistré ! ");
              })
              .catch(() => {
                setMsg("inscription échoué !");
              });
          }}
        >
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
          <p>{msg}</p>
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
