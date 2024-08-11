import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid, Paper, Avatar, Divider, CircularProgress } from '@mui/material';
import { TaskAlt, DonutLarge, ViewModule, Feedback } from '@mui/icons-material';
import avatar from '../assets/avatar.jpg'; // Import the image
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Studentdb() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Example progress values for 5 quizzes
  const quizProgress = [80, 65, 90, 55, 70];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Student Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', padding: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar src={avatar} sx={{ width: 50, height: 50, margin: '2' }}></Avatar>
          <Typography variant="h5">
            Noor Jehan
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Quiz', 'My Progress', 'Course Module', 'Feedback'].map((text, index) => (
              <ListItem
                button
                key={text}
                sx={{
                  '&:hover': {
                    background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
                    color: 'white',
                    fontSize: '30px',
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                  },
                }}
                onClick={() => {
                  if (text === 'Feedback') {
                    navigate('/StdFeedback'); // Navigate to the Feedback page
                  }
                  else if (text === 'My Progress') {
                    navigate('/StdProgress'); // Navigate to the Course Module page
                  }
                  else if (text === 'Course Module') {
                    navigate('/CourseModule'); // Navigate to the Course Module page
                  }
                }}
              >
                <ListItemIcon>
                  {index === 0 && <TaskAlt />}
                  {index === 1 && <DonutLarge />}
                  {index === 2 && <ViewModule />}
                  {index === 3 && <Feedback />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height: 800, width: 800 }}
      >
        <Toolbar />
        <Typography paragraph>
          Welcome to the Dashboard!
        </Typography>
        <Grid container spacing={2}>
          {['QUIZ', 'MY PROGRESS', 'COURSE MODULE', 'FEEDBACK'].map((box, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Paper
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '20px',
                  background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
                  height: 150, // Set a fixed height to make the boxes more square
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (box === 'FEEDBACK') {
                    navigate('/StdFeedback');
                  }
                  else if (box === 'MY PROGRESS') {
                    navigate('/StdProgress');
                  }
                  else if (box === 'COURSE MODULE') {
                    navigate('/CourseModule');
                  }
                }}
              >
                {box}
              </Paper>
            </Grid>
          ))}
        </Grid>
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
                      backgroundColor: '#0398dc',
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
            <Paper sx={{ padding: '4', textAlign: 'center', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <CircularProgress variant="determinate" value={75} size={150} thickness={4} />
              <Typography variant="h6" sx={{ mt: 4 }}>75%</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Studentdb;