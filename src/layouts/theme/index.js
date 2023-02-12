import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

//NOTE Create Light Theme
export const LightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
  typography: {
    fontFamily: "tanha,vazir, roboto",
  },

});

//NOTE Create Dark Theme
export const DarkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
  typography: {
    fontFamily: "tanha,vazir, roboto",
  },

});
