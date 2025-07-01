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
        Chip,
        Stack,
        Rating,
    } from "@mui/material";
import { stays } from "../Data/stays";

const StayPage = () =>
{
    const { id } = useParams();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const stay = stays.find((item) => item.id === Number(id));

    if (!stay)
    {
        return (
            <Container maxWidth="xl" sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="h4" color="error">
                    Stay not found.
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 }, position: "relative" }}>
            {/* Main Image */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: 250, sm: 400, md: 600, lg: 700 },
                    position: "relative",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: 5,
                }}
            >
                <img
                    src={stay.mainImage}
                    alt={stay.name}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                    }}
                />
            </Box>

            {/* Text Content */}
            <Box
                sx={{
                    position: { xs: "relative", md: "absolute" },
                    top: { md: "15%" },
                    left: { md: "5%" },
                    width: { xs: "100%", sm: "90%", md: "40%" },
                    backgroundColor: {
                        xs: "transparent",
                        md: isDarkMode ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.85)",
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
                    variant={isMobile ? "h5" : isTablet ? "h4" : "h2"}
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                >
                    {stay.name}
                </Typography>

                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    📍 {stay.location}
                </Typography>

                <Rating
                    name="read-only"
                    value={stay.rating}
                    precision={0.5}
                    readOnly
                    sx={{ mb: 2 }}
                />

                <Typography
                    variant="body1"
                    sx={{ mb: 3, color: isDarkMode ? "#ccc" : "#333" }}
                >
                    {stay.description}
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mb: 3 }}
                >
                    {stay.amenities.map((item) => (
                        <Chip
                            key={item}
                            label={item}
                            variant="outlined"
                            sx={{
                                borderColor: isDarkMode ? "#aaa" : "#333",
                                color: isDarkMode ? "#ccc" : "#333",
                                fontSize: { xs: "0.75rem", sm: "0.8rem" },
                            }}
                        />
                    ))}
                </Stack>

                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    💲 Price per Night: ${stay.price}
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
                    Book Now
                </Button>
            </Box>

            {/* Thumbnail Gallery */}
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    mt: 5,
                    overflowX: "auto",
                    pb: 1,
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": {
                        height: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: isDarkMode ? "#555" : "#ccc",
                        borderRadius: "10px",
                    },
                }}
            >
                {stay.images.map((img, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: { xs: 160, sm: 220, md: 280 },
                            height: { xs: 100, sm: 150, md: 180 },
                            borderRadius: 3,
                            overflow: "hidden",
                            flexShrink: 0,
                            boxShadow: 3,
                        }}
                    >
                        <img
                            src={img}
                            alt={`Stay ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                ))}
            </Stack>
        </Container>
    );
};

export default StayPage;
