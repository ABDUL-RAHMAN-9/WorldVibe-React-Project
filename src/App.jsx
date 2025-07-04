import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import DrawerAppBar from "./Sections/DrawerAppBar";
import HomePage from "./Pages/HomePage";
import DestinationPage from "./Pages/DestinationPage";
import ExplorePage from './Pages/ExplorePage';
import StayPage from './Pages/StayPage'

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
      <CssBaseline />

      <Router>
        <DrawerAppBar onToggleTheme={toggleTheme} isDarkMode={mode === "dark"} /> {/* Navigation Added */}
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destination/:id" element={<DestinationPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/stay/:id" element={<StayPage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>

  );
};

export default App;
