import React from "react";
import { Box, Container, Typography, Button, useTheme, Paper, Grid } from "@mui/material";
import ExplorewithFriends from '../assets/ExplorewithFriends.png';

const ExploreStories = () =>
{
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Container maxWidth="xl" sx={{ py: 26 }}>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 4,
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                {/* Image Box */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img

                        src={ExplorewithFriends}
                        alt="Exploring with Friends"
                        style={{
                            width: '100%',
                            maxWidth: 800,
                            borderRadius: 8
                        }}
                    />
                </Box>

                {/* Text Box */}
                <Box
                    sx={{
                        flex: 1,
                        color: isDarkMode ? "white" : "black",
                        textAlign: { xs: 'center', md: 'left' }
                    }}
                >
                    <Typography variant="h3" fontWeight={600}>
                        Unlock the World: Adventures Await!
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 2 }}>
                        <i>
                            "Exploring isn't just about seeing places—it's about experiencing life from a new perspective. Whether it's wandering through historic streets, immersing in new cultures, or traveling with friends, every moment contributes to a story worth telling."
                        </i>
                    </Typography>

                    {/* Travel Highlights */}
                    <Typography variant="h5" sx={{ mt: 4, fontWeight: 600 }}>
                        Plan Your Next Adventure
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 1, color: isDarkMode ? "#ddd" : "#555" }}>
                        "My trip to Santorini felt surreal—blue waters stretching endlessly, ancient roads lined with stories, and sunsets painting the sky in a golden hue. Every step felt like stepping into a dream."<span style={{ color: 'white', fontSize: 18, marginLeft: 10 }} > — Sophia Carter</span>
                    </Typography>

                    {/* Call-to-Action Button */}
                    <Button
                        variant="contained"
                        sx={{
                            mt: 4,
                            backgroundColor: isDarkMode ? "#fff" : "#000",
                            color: isDarkMode ? "#000" : "#fff"
                        }}
                    >
                        Discover More
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ExploreStories;
