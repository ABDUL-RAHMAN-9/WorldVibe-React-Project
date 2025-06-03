import React, { useEffect, useRef } from "react";
import { Box, Typography, Avatar, Paper, Container } from "@mui/material";
import { users } from "../Data/users"; // Import updated user data

const ReviewSection = () =>
{
    const scrollRef = useRef(null);

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            if (scrollRef.current)
            {
                scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
            }
        }, 10); // Reduce interval time for faster scrolling

        return () => clearInterval(interval);
    }, []);

    return (
        <Container maxWidth="xl" sx={{ py: 10 }}>
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 2 }}>
                    Traveler Reviews ✨
                </Typography>

                {/* Scrollable Cards */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        gap: 3,
                        overflowX: "hidden",
                        scrollBehavior: "smooth",
                        px: 4,
                        "&::-webkit-ReviewSection": { display: "none" },
                        flexWrap: "nowrap",
                    }}
                >
                    {users.map((user) => (
                        <Paper
                            key={user.id}
                            sx={{
                                minWidth: 350, // Increased card size
                                maxWidth: 400,
                                borderRadius: 2,
                                p: 3,
                                textAlign: "center",
                                boxShadow: 5,
                                bgcolor: "background.paper",
                            }}
                        >
                            <Avatar src={user.avatar} alt={user.name} sx={{ width: 70, height: 70, mx: "auto", mb: 2 }} />
                            <Typography fontWeight="bold" variant="h5">{user.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{user.location}</Typography>
                            <Typography variant="body1" sx={{ mt: 2, fontStyle: "italic" }}>"{user.feedback}"</Typography>
                            <Typography variant="caption" color="primary" sx={{ mt: 2 }}>Joined: {user.joined}</Typography>
                        </Paper>
                    ))}
                </Box>
            </Box>
        </Container >

    );
};

export default ReviewSection;
