import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import DrawerAppBar from "./Sections/DrawerAppBar";
import HomePage from "./Pages/HomePage";
import DestinationPage from "./Pages/DestinationPage";
import ExplorePage from './Pages/ExplorePage'

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

      <Router>  {/* Enables Routing */}
        <DrawerAppBar onToggleTheme={toggleTheme} isDarkMode={mode === "dark"} />
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/destination/:id" element={<DestinationPage />}></Route>
            <Route path="/explore" element={<ExplorePage />}></Route>
          </Routes>
        </Box>
      </Router>

    </ThemeProvider>
  );
};

export default App;
