import React from 'react';
import './App.css';
import MenuBar from "./components/MenuBar";
import Dashboard from "./components/Dashboard";
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MenuBar />
      <Dashboard />
    </ThemeProvider>
  );
}
