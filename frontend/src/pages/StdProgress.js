import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Grid, Paper, CircularProgress, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function StdProgress() {
    const navigate = useNavigate(); // Initialize the navigate function

    // Example progress values for 5 quizzes
    const quizProgress = [80, 65, 90, 55, 70];

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: 'linear-gradient(to right, rgba(0, 172, 193, 0.8), rgba(67, 160, 71, 0.8))',
                }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleGoBack}
                        aria-label="back"
                        sx={{ mr: 2 }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Your Progress
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height: 800, width: 800 }}
            >
                {/* Circular Progress and Bar Chart Section */}
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    {/* Bar Chart */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="h6">Your Overall Progress</Typography>
                        <Paper sx={{ padding: 3, textAlign: 'center', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', height: '100%', width: '100%', justifyContent: 'space-around' }}>
                                {quizProgress.map((progress, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: '15%',
                                            // backgroundColor: '#0398dc',
                                            background: 'rgba(0, 172, 193, 0.8)',
                                            height: `${progress}%`,
                                            borderRadius: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            padding: 1,
                                        }}
                                    >
                                        <Typography variant="body2" color="white">{`Quiz ${index + 1}`}</Typography>
                                        <Typography variant="body2" color="white">{`${progress}%`}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                    {/* Circular Progress */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant="h6">Your Current Progress</Typography>
                        <Paper
                            sx={{
                                padding: '4',
                                textAlign: 'center',
                                height: '300px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <CircularProgress
                                variant="determinate"
                                value={75}
                                size={150}
                                thickness={4}
                                sx={{
                                    color: 'rgba(0, 172, 193, 0.8)', // Set the filled color
                                }}
                            />
                            <Typography variant="h6" sx={{ mt: 4 }}>75%</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default StdProgress;
