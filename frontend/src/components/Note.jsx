import { styled } from "@mui/material/styles";
import { Box, Rating, Typography } from "@mui/material";
import PropTypes from "prop-types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Note({ note }) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#e86cbe",
    },
  });

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
        }}
        component="legend"
      >
        Note
      </Typography>
      <StyledRating
        name="notation"
        value={note}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
        sx={{ paddingBottom: "1rem" }}
      />
    </Box>
  );
}

Note.propTypes = {
  note: PropTypes.number,
}.isRequired;
