import React from "react";
import { Box, Container, Typography, useTheme, Button } from '@mui/material';



const ShowcaseSection = ({ imageSrc, title, description, highlightTitle, highlightText, buttonText }) =>
{
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Container maxWidth="xl" sx={{ py: 10 }}>

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
                        src={imageSrc}
                        alt="Showcase View"
                        style={{
                            width: '100%',
                            maxWidth: 500,
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
                        {title}
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 2 }}>
                        <i>{description}</i>
                    </Typography>

                    {/* Travel Highlights */}
                    <Typography variant="h5" sx={{ mt: 4, fontWeight: 600 }}>
                        {highlightTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: isDarkMode ? "#ddd" : "#555" }}>
                        {highlightText}
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
                        {buttonText}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default ShowcaseSection;
