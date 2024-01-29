import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import UserAvatar from "../userAvatar";

const RightSection = () => {
  return (
    <Grid item>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <UserAvatar />
      </Box>
    </Grid>
  );
};

export default RightSection;
