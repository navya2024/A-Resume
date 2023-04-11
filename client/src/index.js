import { createTheme,ThemeProvider, CssBaseline } from "@mui/material";
import ReactDOM  from "react-dom/client";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ef5350",
    },
    secondary: {
      main: "#455a64",
    },
    gradient: {
      main: "linear-gradient(to right, #ddd6f3, #faaca8)",
      mainChannel: "0 0 0",
    }
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: 30,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    p: {
      fontStyle: 'italic',
      fontWeight: 600,
    },
    p2:{
      fontSize: 30,
      fontWeight: 800, 
    },
    p3:{
      fontSize: 20,
      fontWeight: 400, 
    },
  },
  shadows: "none",
  
});



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
