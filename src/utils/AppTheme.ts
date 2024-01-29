"use client";
import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#3468C0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FF9843",
      contrastText: "#ffffff",
    },
  },
  spacing: 8,
  //   typography: {
  //     h4: {
  //       fontWeight: 700,
  //       fontSize: "18px",
  //       lineHeight: "22px",
  //       color: "#FFFFFF",
  //     },
  //     h5: {
  //       fontWeight: 700,
  //       fontSize: "16px",
  //       lineHeight: "18px",
  //       color: "#FFFFFF",
  //     },
  //     h6: {
  //       fontWeight: 400,
  //       fontSize: "16px",
  //       lineHeight: "22px",
  //       color: "#FFFFFF",
  //     },
  //     body1: {
  //       fontWeight: 400,
  //       fontSize: "16px",
  //       lineHeight: "22px",
  //       color: "#FFFFFF",
  //     },
  //     subtitle1: {
  //       fontWeight: 400,
  //       fontSize: "12px",
  //       lineHeight: "18px",
  //       color: "#FFFFFF",
  //     },
  //   },
});

export default AppTheme;
