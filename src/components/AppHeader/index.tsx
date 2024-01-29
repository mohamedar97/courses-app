"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MobileMenu from "./mobileMenu";
import DesktopMenu from "./desktopMenu/index";

const pages = ["Products", "Pricing", "Blog"];

const AppHeader = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopMenu pages={pages} />
          <MobileMenu pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
