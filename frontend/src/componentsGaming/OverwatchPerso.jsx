import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Support from "../assets/Pictures/Overwatch/support.png";
import Dps from "../assets/Pictures/Overwatch/DPS.png";

function TabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function FloatingActionButtonZoom() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="persoContain">
      <AppBar position="static" color="transparent">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="TANK" />
          <Tab label="DEGÂTS" />
          <Tab label="SUPPORT" />
        </Tabs>
      </AppBar>
      <div className="test">
        <TabPanel value={value} index={0}>
          <img src={Support} alt="" />
          Les tanks sont là pour encaisser les dégâts et s’attaquer à des
          positions stratégiques, qu’il s’agisse d’ennemis groupés ou de points
          d’étranglement. Si vous êtes un tank, c’est à vous de mener la charge.
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img src={Dps} alt="" />
          Les spécialistes des dégâts traquent, attaquent et éliminent l’ennemi
          avec toutes sortes d’outils, de capacités et de styles de jeu.
          Redoutables mais fragiles, ces personnages ont besoin de renforts pour
          survivre.
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img src={Support} alt="" />
          Les personnages de soutien assistent leurs alliés en leur procurant
          des soins et des boucliers, en augmentant leurs dégâts et en
          neutralisant les menaces. Votre rôle de soutien vous rend
          indispensable à la survie de votre équipe.
        </TabPanel>
      </div>
    </Box>
  );
}
