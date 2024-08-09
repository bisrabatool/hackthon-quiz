import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid, Paper } from '@mui/material';
import { PeopleAlt, TaskAlt, Feedback, Grade } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Dashboard() {
  const navigate = useNavigate(); // Initialize the navigate function

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
            Admin Dashboard
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
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Student Info', 'Quiz category', 'Feedback', 'Score'].map((text, index) => (
              <ListItem
                button
                key={text}
                sx={{
                  '&:hover': {
                    background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
                    color: 'white',
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                  },
                }}
                onClick={() => {
                  if (text === 'Student Info') {
                    navigate('/StudentInfo'); // Navigate to the Student Info page
                  } else if (text === 'Quiz category') {
                    navigate('/QuizForm');
                  }
                }}
              >
                <ListItemIcon>
                  {index === 0 && <PeopleAlt />}
                  {index === 1 && <TaskAlt />}
                  {index === 2 && <Feedback />}
                  {index === 3 && <Grade />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3,  height:800, width:800}}
      >
        <Toolbar />
        <Typography paragraph>
          Welcome to the Dashboard!
        </Typography>
        <Grid container spacing={2}>
          {['STUDENT', 'QUIZ', 'FEEDBACK', 'SCORE'].map((box, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Paper
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '20px',
                  background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
                  height: '100%',
                  minHeight: 150,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (box === 'QUIZ') {
                    navigate('/QuizForm');
                  }
                }}
              >
                {box}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;












