import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ExploreCard = ({ explore }) => (
    <Box
        sx={{
            width: 300,
            flexShrink: 0,
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "background.paper",
            boxShadow: 3,
            cursor: "pointer",
            transition: "transform 0.4s ease",
            "&:hover": { transform: "translateY(-2px)" },
        }}
    >
        {/* Display explore image */}
        <Box component="img" src={explore.image} alt={explore.name} sx={{ width: "100%", height: 180, objectFit: "cover" }} />

        <Box sx={{ p: 2 }}>
            {/* Display explore tags if available */}
            {explore.tags?.length > 0 && (
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {explore.tags.join(" • ")}
                </Typography>
            )}

            {/* Explore name and location */}
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
                {explore.name}, {explore.country}
            </Typography>

            {/* Explore description */}
            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {explore.description}
            </Typography>

            {/* Display rating if available */}
            {explore.rating && (
                <Typography variant="body2" color="warning.main">
                    ⭐ {explore.rating}
                </Typography>
            )}

            {/* Button for more details */}
            <Button variant="outlined" sx={{ mt: 3 }}>
                Learn More
            </Button>
        </Box>
    </Box>
);

export default ExploreCard;
