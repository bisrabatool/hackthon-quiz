// import React from 'react';
// import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid, Paper } from '@mui/material';
// import { PeopleAlt, TaskAlt, Feedback, Grade } from '@mui/icons-material';

// const drawerWidth = 240;

// function Dashboard() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//           background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
//         }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//              Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {['Student Info', 'Quiz category', 'Feedback', 'Score'].map((text, index) => (
//               <ListItem
//                 button
//                 key={text}
//                 sx={{
//                   '&:hover': {
//                     background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
//                     color: 'white',
//                     // fontSize:'30px',
//                     '& .MuiListItemIcon-root': {
//                       color: 'white',

//                     },
//                   },
//                 }}
//               >
//                 <ListItemIcon>
//                   {index === 0 && <PeopleAlt />}
//                   {index === 1 && <TaskAlt />}
//                   {index === 2 && <Feedback />}
//                   {index === 3 && <Grade />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Welcome to the Dashboard!
//         </Typography>
//         <Grid container spacing={2}>
//           {['STUDENT', 'QUIZ', 'FEEDBACK', 'SCORE'].map((box, index) => (
//             <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
//               <Paper
//                  sx={{
//                   padding: 2,
//                   textAlign: 'center',
//                   color: 'white',
//                   fontSize:'20px',
//                   background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
//                   height: 150, // Set a fixed height to make the boxes more square
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {box}
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default Dashboard;
// import React from 'react';
// import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid, Paper } from '@mui/material';
// import { PeopleAlt, TaskAlt, Feedback, Grade } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// const drawerWidth = 240;

// function Dashboard() {
//   const navigate = useNavigate(); // Initialize the navigate function

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//           background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
//         }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {['Student Info', 'Quiz category', 'Feedback', 'Score'].map((text, index) => (
//               <ListItem
//                 button
//                 key={text}
//                 sx={{
//                   '&:hover': {
//                     background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
//                     color: 'white',
//                     '& .MuiListItemIcon-root': {
//                       color: 'white',
//                     },
//                   },
//                 }}
//               >
//                 <ListItemIcon>
//                   {index === 0 && <PeopleAlt />}
//                   {index === 1 && <TaskAlt />}
//                   {index === 2 && <Feedback />}
//                   {index === 3 && <Grade />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Welcome to the Dashboard!
//         </Typography>
//         <Grid container spacing={2}>
//           {['STUDENT', 'QUIZ', 'FEEDBACK', 'SCORE'].map((box, index) => (
//             <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
//               <Paper
//                 sx={{
//                   padding: 2,
//                   textAlign: 'center',
//                   color: 'white',
//                   fontSize: '20px',
//                   background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
//                   height: 150,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => {
//                   if (box === 'QUIZ') {
//                     navigate('/QuizForm');
//                   }
//                 }}
//               >
//                 {box}
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default Dashboard;
import React, { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid, Paper } from '@mui/material';
import { PeopleAlt, TaskAlt, Feedback, Grade } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import QuizForm from './QuizForm'; 
import QuizComponent from '../components/QuizComponent'; 

const drawerWidth = 240;

function Dashboard() {
  const [questions, setQuestions] = useState([]); 
  const navigate = useNavigate();

  const handleUpdateQuestions = (quizData) => {
    // new question update k liye
    setQuestions(quizData.questions);
  };

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
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Welcome to the Dashboard!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Paper
              sx={{
                padding: 2,
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                background: 'linear-gradient(45deg, #0398dc 30%, #1fb472 90%)',
                height: 150,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/create-quiz')}
            >
              Create Quiz
            </Paper>
          </Grid>
        </Grid>
  
       <QuizForm onSubmitQuiz={handleUpdateQuestions} />
       <QuizComponent questions={questions} />
      </Box>
    </Box>
  );
}

export default Dashboard;








