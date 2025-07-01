import React from 'react';
import
{
    Box,
    Container,
    Typography,
    Link,
    useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import mountain from '../assets/Showcase/mountain.png';

const Footer = () =>
{
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Box
            component="footer"
            sx={{
                // Use the mountain image as a background along with a semi-transparent overlay for readability
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${mountain})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: isDarkMode ? theme.palette.common.white : theme.palette.common.white,
                py: { xs: 4, md: 6 },
            }}
        >
            <Container maxWidth="xl" sx={{ borderRadius: 4, border: '1px solid #A0A0A0', p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: "space-between", flexDirection: 'row', alignItems: 'center', borderBottom: 1 }}>
                    {/* About / Branding */}
                    <Box item xs={12} md={4} sx={{ maxWidth: 500 }}>
                        <Typography variant="h2" fontWeight={600}>
                            World Explore
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2, fontSize: 16,color:'#A0A0A0' }}>
                            Welcome to your go-to destination for insightful news! Discover carefully selected articles that inform, inspire.
                        </Typography>
                    </Box>

                    {/* Quick Links */}
                    <Box item xs={12} md={4} sx={{ borderLeft: 1, p: 6, maxWidth: 300 }}>
                        <Typography variant="h6" fontWeight={500}>
                            Quick Link
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1, color: '#A0A0A0' }}>
                            <Link href="#" underline="hover" color="inherit">
                                HomePage
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Destinations
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Blog
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Our Stories
                            </Link>
                        </Box>
                    </Box>

                    <Box item xs={12} md={4} sx={{ p: 6, borderRight: 1, }}>
                        <Typography variant="h6" fontWeight={500}>
                            Useful Links
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1, color: '#A0A0A0' }}>
                            <Link href="#" underline="hover" color="inherit">
                                Product Grid
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Product Detail
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                Card
                            </Link>
                            <Link href="#" underline="hover" color="inherit">
                                CheckOut
                            </Link>
                        </Box>
                    </Box>

                    {/* Social Media Links */}
                    <Box item xs={12} md={4} sx={{ p: 6 }}>
                        <Typography variant="h6" fontWeight={500}>
                            Follow Us
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: '#3b5998' } }}>
                                <FacebookIcon />
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: '#1DA1F2' } }}>
                                <TwitterIcon />
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: '#C13584' } }}>
                                <InstagramIcon />
                            </Link>
                            <Link href="#" color="inherit" sx={{ '&:hover': { color: '#0e76a8' } }}>
                                <LinkedInIcon />
                            </Link>
                        </Box>
                    </Box>


                    {/* Copyright Section */}
                </Box>
                <Container maxWidth="xl" >
                    <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: 4, mt: 2 ,color:'#A0A0A0'}}>
                        <Typography variant="body2">
                            © {new Date().getFullYear()} World Explore. All Rights Reserved.
                        </Typography>
                    </Box>
                </Container>
            </Container>



        </Box>
    );
};

export default Footer;
