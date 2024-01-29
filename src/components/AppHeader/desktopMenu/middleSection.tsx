import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";

interface MiddleSectionProps {
  pages: string[];
}
const MiddleSection: React.FC<MiddleSectionProps> = ({ pages }) => {
  return (
    <Grid item>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            // onClick={handleCloseNavMenu}
            sx={{ color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Grid>
  );
};

export default MiddleSection;
