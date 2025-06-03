import React, { useState, useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import FeatureIconTag from '../Components/FeatureIconTag'

const slides = [
    {
        image: "src/assets/hero/hero-1.avif",
        title: "Discover New Destinations",
        description: "Explore the world's hidden gems, from vibrant cities to remote landscapes. Find places that match your vibe!"
    },
    {
        image: "src/assets/hero/hero-2.avif",
        title: "Taste Global Cuisine",
        description: "Food tells a story! Dive into authentic flavors from different cultures and savor unforgettable dishes."
    },
    {
        image: "src/assets/hero/hero-3.png",
        title: "Connect with Fellow Travelers",
        description: "Join a thriving community of explorers, storytellers, and adventurers. Make connections that last a lifetime!"
    },
    {
        image: "src/assets/hero/hero-4.png",
        title: "Plan Your Next Adventure",
        description: "Personalized recommendations, expert insights, and travel guides—all in one place. Start your journey today!"
    },
];

const HeroSection = () =>
{
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                height: "85vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: "100px",
            }}
        >
            {/* Left Button */}
            <Box sx={{
                backgroundColor: '#FFFFFF1A',
                width: 52,
                height: 84,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: "absolute",
                left: 100,
                zIndex: 10,
                boxShadow: 2,
                borderRadius: 2,
                // "&:hover": { backgroundColor: "background.default" },
            }}>
                <IconButton onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}>
                    <ArrowBackIos />
                </IconButton>
            </Box>

            {/* Image Container with Info */}
            <Container
                maxWidth={false}
                sx={{
                    overflow: "hidden",
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "background-image 1s ease-in-out", // Smooth transition effect
                    backgroundImage: `url(${slides[currentIndex].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                    width: "94%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    backdropFilter: "blur(4px)", // Soft blur effect for readability
                    cursor: "pointer"
                }}
            >
                <FeatureIconTag text={'Destinations'} />

                <Box
                    sx={{
                        position: "absolute", // Keeps it fixed at the bottom-right corner
                        bottom: 30, // Adjust for spacing from the bottom
                        left: 30, // Adjust for spacing from the right
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start", // Align text towards the right
                        textAlign: "left", // Right-align text
                        color: "#ffffff", // White text
                        padding: "20px",
                        borderRadius: "10px", // Soft rounded edges
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        <span>FEBRUARY 12, 2025</span>
                        <span style={{ margin: '0 16px' }}>/</span>
                        <span>POST BY EMMA CARSON</span>
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 2, font: 'bol' }}>
                        {slides[currentIndex].title}
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, color: "#ffffff" }}>
                        {slides[currentIndex].description}
                    </Typography>
                </Box>

            </Container>

            {/* Right Button */}
            <Box sx={{
                backgroundColor: '#FFFFFF1A',
                width: 52,
                height: 84,
                cursor:'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: "absolute",
                right: 100,
                zIndex: 10,
                boxShadow: 2,
                borderRadius: 2,
                // "&:hover": { backgroundColor: "white", color: 'black' },
                
            }}>
                <IconButton onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}>
                    <ArrowForwardIos />
                </IconButton>
            </Box>
        </Box>
    );
};

export default HeroSection;
