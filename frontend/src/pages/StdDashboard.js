import React, { useState } from 'react';
import Sidebar from '../components/Slider';
import { Box, AppBar, Toolbar, Typography, Grid, Paper, CircularProgress, Dialog, Card, CardContent, Slide, IconButton } from '@mui/material';
import { TaskAlt, DonutLarge, ViewModule, Feedback, Close as CloseIcon } from '@mui/icons-material';
import myImage from "../assets/smitlogo.png";
import { Navigate, useNavigate } from 'react-router-dom';

// const drawerWidth = 240;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog({ open, onClose }) {
  const cardContent = [
    { title: 'Front-End Development', content: 'Basics of React: components, JSX, state, props. Moreover Advanced React concepts including hooks, context API, routing.' },
    { title: 'Back-End Development', content: 'Introduction to Node.js and asynchronous, JavaScriptBuilding RESTful APIs with Express.js, Authentication and authorization using JWT (JSON Web Tokens).' },
    { title: 'Data Management', content: 'Introduction to NoSQL databases and MongoDB, CRUD operations with MongoDB and Mongoose. Moreover ODM Modeling data for efficient querying.' },
    { title: 'Connecting the Stack', content: 'Integrating React with Node.js and Express, consuming APIs in React and managing state across the application.' },
    { title: 'Additional Tools and Libraries', content: 'Using Redux or React Context for state management (optional), testing frameworks for both front-end and back-end and continuous integration and deployment (CI/CD) pipelines.' },
    { title: 'Advanced Topics and Best Practices', content: 'Deployment strategies for MERN applications,security best practices: input validation, XSS, CSRF protection and performance optimization techniques.' },
  ];

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative', background: 'linear-gradient(to right, rgba(0, 172, 193, 0.8), rgba(67, 160, 71, 0.8))' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: '2', flex: 1 }} variant="h6" component="div">
            Course Module
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 2, color: 'rgba(8, 145, 178, 1)', fontFamily: 'Pacifico', fontSize: '50px', fontWeight: '400', fontStyle: 'normal' }} className="pacifico-regular">
        <Typography variant="h4" gutterBottom>
          Course Module Content
        </Typography>
        <Grid container spacing={2}>
          {cardContent.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  background: 'linear-gradient(to right, rgba(0, 172, 193, 0.8), rgba(67, 160, 71, 0.8))',
                  WebkitBackgroundClip: 'border-box',
                  border: '4px solid transparent',
                  borderRadius: '6px',
                }}

              >
                <Card sx={{ height: '100%', borderRadius: 1 }}>
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2">{item.content}</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Dialog>
  );
}

const DashboardPage = () => {

  const navigate = useNavigate(); // Initialize the navigate function
  const [openDialog, setOpenDialog] = useState(false); // State to control the dialog

  // Example progress values for 5 quizzes
  const quizProgress = [80, 65, 90, 55, 70];

  const handleCourseModuleClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Sidebar
      logo={myImage}
      menuItems={{
        main: [
          { icon: <TaskAlt sx={{ color: " rgba(8, 145, 178, 1)" }} />, text: 'Quiz', onClick: () => navigate('/Quize') },
          { icon: <DonutLarge sx={{ color: " rgba(8, 145, 178, 1)" }} />, text: 'My Progress', onClick: () => navigate('/StdProgress') },
          { icon: <ViewModule sx={{ color: " rgba(8, 145, 178, 1)" }} />, text: 'Course Module', onClick: () => handleCourseModuleClick() },
          { icon: <Feedback sx={{ color: " rgba(8, 145, 178, 1)" }} />, text: 'Feedback', onClick: () => navigate('/StdFeedback') },
        ]
      }}
    >
      <div className=''>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3}}
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
                    background: 'linear-gradient(to right, rgba(0, 172, 193, 0.8), rgba(67, 160, 71, 0.8))',
                    height: 150, // Set a fixed height to make the boxes more square
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    if (box === 'FEEDBACK') {
                        navigate('/StdFeedback');
                    } else if (box === 'MY PROGRESS') {
                        navigate('/StdProgress');
                    } else if (box === 'QUIZ') {
                        console.log("Quiz clicked!"); // Add this line for debugging
                        navigate('/Quize');
                    } else if (box === 'COURSE MODULE') {
                        handleCourseModuleClick();
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
              <Paper sx={{borderRadius: 2, boxShadow: 3, padding: 3, textAlign: 'center', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                  borderRadius: 2, boxShadow: 3
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
        <FullScreenDialog open={openDialog} onClose={handleCloseDialog} />
      </div>
    </Sidebar >

  );
};

export default DashboardPage;


