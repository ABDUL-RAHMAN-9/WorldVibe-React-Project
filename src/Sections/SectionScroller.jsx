import React, { useRef, useState, useEffect } from "react";
import { Container, Typography, Box, IconButton, useTheme } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const SectionScroller = ({ title, items, renderCard }) =>
{
    const scrollRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";


    // Check scroll position to update button colors
    const checkScroll = () =>
    {
        const el = scrollRef.current;
        if (!el) return;
        setAtStart(el.scrollLeft === 0);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5); // Adjust for precision
    };

    useEffect(() =>
    {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener("scroll", checkScroll);
        return () => el.removeEventListener("scroll", checkScroll);
    }, []);

    // Scroll handler for navigation
    const handleScroll = (direction) =>
    {
        const el = scrollRef.current;
        if (!el) return;
        const scrollAmount = el.clientWidth * 0.8;
        el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    };

    return (
        <Container maxWidth="xl" sx={{ py: 10 }}>
            {/* Header Section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Heading on the Left */}
                <Typography variant="h4" sx={{ fontWeight: 500, fontSize: 36 }}>
                    {title}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center", textAlign: "center" }}>
                    <IconButton
                        onClick={() => handleScroll("left")}
                        sx={{
                            width: 48, height: 48,
                            backgroundColor: atStart
                                ? (isDarkMode ? "black" : "white")  // White for light mode, black for dark mode
                                : (isDarkMode ? "white" : "black"), // Black for light mode, white for dark mode when scrolling
                            color: atStart
                                ? (isDarkMode ? "white" : "black")  // Icon color adjusts dynamically
                                : (isDarkMode ? "black" : "white"),
                            boxShadow: 2,
                            transition: "background-color 0.3s ease, color 0.3s ease",
                            border: "1px solid #ffffff14",
                        }}
                    >
                        <ArrowBackIos fontSize="inherit" />
                    </IconButton>

                    <IconButton
                        onClick={() => handleScroll("right")}
                        sx={{
                            width: 48, height: 48,
                            backgroundColor: atEnd
                                ? (isDarkMode ? "black" : "white")  // Switch to black at the end in dark mode, white in light mode
                                : (isDarkMode ? "white" : "black"),  // Start as white in dark mode, black in light mode
                            color: atEnd
                                ? (isDarkMode ? "white" : "black")  // Icon color flips accordingly
                                : (isDarkMode ? "black" : "white"),
                            boxShadow: 2,
                            transition: "background-color 0.3s ease, color 0.3s ease",
                            border: "1px solid #ffffff14",
                        }}
                    >
                        <ArrowForwardIos fontSize="inherit" />
                    </IconButton>
                </Box>
            </Box>
            {/* Scrollable Items */}
            <Box ref={scrollRef} sx={{ display: "flex", overflowX: "hidden", scrollBehavior: "smooth", mt: 4 }}>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {renderCard(item)}
                        {/* Apply border only if it's NOT the last item */}
                        {index !== items.length - 1 && <Box sx={{ borderRight: "1px solid #ffffff14" }} />}
                    </React.Fragment>
                ))}
            </Box>
        </Container>
    );
};

export default SectionScroller;
