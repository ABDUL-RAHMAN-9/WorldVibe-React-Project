import { useState } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import DrawerAppBar from "./DrawerAppBar";
import HomePage from "./Pages/HomePage";

const App = () =>
{
  // Manage theme mode state
  const [mode, setMode] = useState("dark");

  // Toggle function to switch between dark and light mode
  const toggleTheme = () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  // Create a theme object based on mode selection
  const theme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensure consistent theme styling across components */}
      <DrawerAppBar onToggleTheme={toggleTheme} isDarkMode={mode === "dark"} />
      <Box>
        <HomePage /> {/* Main Page Render */}
      </Box>
    </ThemeProvider>
  );
};

export default App;
