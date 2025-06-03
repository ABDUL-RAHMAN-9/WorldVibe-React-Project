import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import FeatureIconTag from "./FeatureIconTag"; // Import tag component

const PlaceCard = ({ place }) =>
{
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Container>
            <Box
                sx={{
                    width: 328,
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "translateY(-4px)" },
                    position: "relative",
                }}
            >
                {/* Feature Tag (Top-Left) */}
                <FeatureIconTag
                    text={place.tags[0]}
                    sx={{ position: "absolute", top: "12px", left: "12px" }}
                />

                {/* Display Place Image */}
                <Box
                    component="img"
                    src={place.image}
                    alt={place.name}
                    sx={{
                        width: "100%",
                        height: 244,
                        objectFit: "cover",
                        borderRadius: "8px",
                    }}
                />

                {/* Content Section */}
                <Box sx={{ paddingTop: 2 }}>
                    {/* Place Name & Visitor Rating */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ fontSize: "16px", color: isDarkMode ? "text.primary" : "#222" }}
                        >
                            {place.name}, {place.location}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: "#9a501c",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            ⭐ {place.visitorRating} / 5
                        </Typography>
                    </Box>

                    {/* Tags & Best Time to Visit */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                        <Typography
                            variant="subtitle2"
                            sx={{ color: isDarkMode ? "#874f28" : "#555", fontWeight: "bold" }}
                        >
                            {place.tags.join(" • ")}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: isDarkMode ? "text.disabled" : "#666" }}
                        >
                            {place.bestTimeToVisit}
                        </Typography>
                    </Box>

                    {/* Place Description */}
                    <Typography
                        variant="body2"
                        gutterBottom
                        sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            fontSize: "24px",
                            fontWeight: "bold",
                            mt: 2,
                            color: isDarkMode ? "text.primary" : "#333",
                        }}
                    >
                        {place.description}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default PlaceCard;
