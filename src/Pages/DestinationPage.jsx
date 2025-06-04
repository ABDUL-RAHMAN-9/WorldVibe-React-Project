import React from "react";
import { useParams } from "react-router-dom"; // Fetch dynamic URL data
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { destinations } from "../Data/destinations"; // Replace with real API later

const DestinationPage = () =>
{
    const { id } = useParams(); // Gets the destination ID from the URL
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    // Find destination by ID
    const destination = destinations.find(dest => dest.id === Number(id));

    if (!destination)
    {
        return (
            <Container maxWidth="xl" sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="h4" color="error">
                    Destination not found.
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="" sx={{ py: 11, position: "relative" }}>
            {/* Background Image */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: 400, md: 800 },
                    position: "relative",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 4,
                }}
            >
                <img
                    src={"https://images.unsplash.com/photo-1731177300431-a7ea712958b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt={`View of ${destination.name}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* Responsive Text Box */}
            <Box
                sx={{
                    position: { xs: "relative", md: "absolute" },
                    top: { md: "25%" },
                    right: { xs: "auto", md: 0 },
                    width: { xs: "90%", md: "40%" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: { xs: "transparent", md: isDarkMode ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)" },
                    color: isDarkMode ? "white" : "black",
                    padding: { xs: 3, md: 4 },
                    mx: "auto", // Centers content on mobile view
                }}
            >
                <Typography variant="h2" fontWeight="bold" sx={{ mt: 5, maxWidth: 600 }}>
                    {destination.heading}
                </Typography>

                <Typography variant="body1" sx={{ mt: 4, mb: 5, maxWidth: 600, color: isDarkMode ? "#bbb" : "#444" }}>
                    {destination.description}
                </Typography>

                {/* Call-to-Action Button */}
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        backgroundColor: isDarkMode ? "#fff" : "#000",
                        color: isDarkMode ? "#000" : "#fff",
                    }}
                >
                    Plan Your Trip
                </Button>
            </Box>
        </Container>
    );
};

export default DestinationPage;
