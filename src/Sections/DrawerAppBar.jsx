import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Button, CssBaseline } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom"; // Import Link for navigation

const navItems = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/explore" },
  { label: "Stay", path: "/stay/1" },
  { label: "Food", path: "/food" },
  { label: "Destination", path: "/destination/1" }, // Example destination ID
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];

const DrawerAppBar = ({ onToggleTheme, isDarkMode }) =>
{
  const [activeTab, setActiveTab] = useState("Home");

  // Define themes for light & dark mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#fff" : "#000",
      },
      background: {
        default: isDarkMode ? "#181818" : "#ffffff",
        paper: isDarkMode ? "#242424" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", borderBottom: `1px solid ${isDarkMode ? "#ffffff1a" : "#0000001a"}` }}>
        <CssBaseline />
        <AppBar
          component="nav"
          position="fixed"
          sx={{
            background: isDarkMode ? "rgba(24, 24, 24, 0.6)" : "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
            boxShadow: "none",
            borderBottom: `1px solid ${isDarkMode ? "#ffffff1a" : "#0000001a"}`,
            top: 0,
            width: "100%",
            zIndex: 1100,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
            {/* Left-aligned Navigation Tabs */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link} // Making it a router link
                  to={item.path}
                  onClick={() => setActiveTab(item.label)}
                  sx={{
                    color: theme.palette.primary.main,
                    textTransform: "none",
                    fontSize: "1rem",
                    position: "relative",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: isDarkMode ? "#ffffff1a" : "#e0e0e0",
                      transform: "scale(1.05)",
                    },
                    "&::after": activeTab === item.label
                      ? {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "10%",
                        width: "80%",
                        height: "2px",
                        backgroundColor: "#FFD700",
                        transition: "0.3s ease",
                      }
                      : {},
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Right-aligned Theme Toggle */}
            <IconButton
              onClick={onToggleTheme}
              sx={{
                transition: "0.3s ease",
                color: isDarkMode ? "#fff" : "#000",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default DrawerAppBar;
