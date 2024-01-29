import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import UserAvatar from "../userAvatar";
import Grid from "@mui/material/Grid";
import LeftSection from "./leftSection";
import MiddleSection from "./middleSection";
import RightSection from "./rightSection";
interface DesktopMenuProps {
  pages: string[];
}
const DesktopMenu: React.FC<DesktopMenuProps> = ({ pages }) => {
  return (
    <>
      <Grid
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <LeftSection />
        <MiddleSection pages={pages} />
        <RightSection />
      </Grid>
    </>
  );
};

export default DesktopMenu;
