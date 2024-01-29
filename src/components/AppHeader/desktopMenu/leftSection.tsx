import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const LeftSection = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="#app-bar-with-responsive-menu"
      sx={{
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      LOGO
    </Typography>
  );
};

export default LeftSection;
