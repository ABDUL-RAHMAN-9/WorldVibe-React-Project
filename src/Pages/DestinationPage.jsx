import React from "react";
import { useParams } from "react-router-dom";
import
{
    Box,
    Container,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { destinations } from "../Data/destinations";

const DestinationPage = () =>
{
    const { id } = useParams();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const destination = destinations.find((dest) => dest.id === Number(id));

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
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 12 }, position: "relative" }}>
            {/* Background Image with Gradient Overlay */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: 400, sm: 500, md: 700, lg: 800 },
                    position: "relative",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: 5,
                }}
            >
                <img
                    src={destination.image}
                    alt={`View of ${destination.name}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                    }}
                />
            </Box>

            {/* Text Content */}
            <Box
                sx={{
                    position: { xs: "relative", md: "absolute" },
                    top: { md: "20%" },
                    left: { md: "5%" }, // ✅ Shift to left instead of right
                    right: { md: "auto" }, // ✅ Cancel right alignment
                    width: { xs: "100%", sm: "90%", md: "40%" },
                    backgroundColor: {
                        xs: "transparent",
                        md: isDarkMode ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.75)",
                    },
                    color: isDarkMode ? "#fff" : "#111",
                    borderRadius: { xs: 0, md: 4 },
                    p: { xs: 3, md: 5 },
                    mx: { xs: "auto", md: 0 },
                    mt: { xs: 3, md: 0 },
                    boxShadow: { md: 4 },
                }}
            >
                <Typography
                    variant={isMobile ? "h4" : "h2"}
                    fontWeight="bold"
                    sx={{ mb: 3 }}
                >
                    {destination.heading}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        color: isDarkMode ? "#ccc" : "#333",
                        lineHeight: 1.7,
                    }}
                >
                    {destination.description}
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: isDarkMode ? "#fff" : "#111",
                        color: isDarkMode ? "#000" : "#fff",
                        textTransform: "none",
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: isDarkMode ? "#ddd" : "#000",
                        },
                    }}
                >
                    Plan Your Trip
                </Button>
            </Box>

        </Container>
    );
};

export default DestinationPage;
