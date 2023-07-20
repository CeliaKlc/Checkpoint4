import { Box, FormControl, Input, InputLabel, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="contactContain">
        <div className="contact-epilogue">
          <h1>Me contacter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iure,
            asperiores sunt vel hic quis placeat necessitatibus doloremque eum
            tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Saepe iure, asperiores sunt vel hic quis placeat necessitatibus
            doloremque eum tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Saepe iure, asperiores sunt vel hic quis placeat
            necessitatibus doloremque eum tempora. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe iure, asperiores sunt vel hic
            quis placeat necessitatibus doloremque eum tempora.
          </p>
        </div>
        <Box
          sx={{ display: "flex", flexWrap: "wrap" }}
          className="form-contact"
        >
          <FormControl
            sx={{ m: 1, width: "35ch" }}
            variant="standard"
            className="form-contact-line"
          >
            <InputLabel htmlFor="emai">Adresse Mail</InputLabel>
            <Input type="text" id="email" name="email" />
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "35ch", paddingBottom: "1rem" }}
            variant="standard"
            className="form-contact-line"
          >
            <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
            <Input id="username" name="username" />
          </FormControl>
          <FormControl variant="standard" className="form-contact-line">
            <TextField
              sx={{ width: "35ch" }}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
            />
          </FormControl>
          <button type="submit" className="submit-button submit-contact">
            Soumettre
          </button>
        </Box>
      </section>
      <Footer />
    </>
  );
}
