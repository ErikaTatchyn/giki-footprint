import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5f2b68",
      light: "#84478f",
    },
    secondary: {
      main: "#c44170",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

export default theme;
