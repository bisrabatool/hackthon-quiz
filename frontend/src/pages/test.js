import React, { useState } from 'react';
import Sidebar from '../components/Slider';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import CreateIcon from '@mui/icons-material/Create'; 
import BarChartIcon from '@mui/icons-material/BarChart'; 
import myImage from "../assets/smitlogo.png";
import AddCourse from '../components/AddCourse';
import CreateQuiz from '../components/CreateQuiz';
import { Card, Typography, Grid } from '@mui/material';
import Progressbar from "../components/progressbar";
import BarChart from '../components/BarChart';

const DashboardPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSidebarClick = (item) => {
    if (item.text === 'Add Course') {
      setActiveComponent('AddCourse');
    } else if (item.text === 'Create Quiz') {
      setActiveComponent('CreateQuiz');
    } else {
      console.log(`${item.text} Clicked`);
    }
  };

  return (
    <Sidebar
      logo={myImage}
      menuItems={{
        main: [
          { icon: <HomeIcon sx={{color: "rgba(8, 145, 178, 1)"}}/>, text: 'Home' , onClick: () => setActiveComponent(null) },
          { icon: <AddBoxIcon sx={{color: "rgba(8, 145, 178, 1)"}}/>, text: 'Add Course', onClick: () => handleSidebarClick({ text: 'Add Course' }) },
          { icon: <CreateIcon sx={{color: "rgba(8, 145, 178, 1)"}}/>, text: 'Create Quiz', onClick: () => handleSidebarClick({ text: 'Create Quiz' }) },
          { icon: <BarChartIcon sx={{color: "rgba(8, 145, 178, 1)"}}/>, text: 'Progress', onClick: () => console.log('Progress Clicked') },
        ]
      }}
    >
      <div className='mt-5'>
        {activeComponent === 'AddCourse' && <AddCourse />}
        {activeComponent === 'CreateQuiz' && <CreateQuiz />}

        <Grid container spacing={2} sx={{padding:2}}>
          <Grid item xs={12} md={8}>
            <Card sx={{ marginTop:1, padding: 2 ,borderRadius: 2, boxShadow: 3}}>
              <BarChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "530px",marginTop:1, borderRadius: 2, boxShadow: 3, padding: 2 }}>
              <Typography sx={{ fontWeight: "bold" }}>Progress</Typography>
              <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Web Development</Typography>
              <Progressbar value={80} />
              <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Graphic Designing</Typography>
              <Progressbar value={60} />
              <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Machine Learning</Typography>
              <Progressbar value={90} />
              <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Cloud Computing</Typography>
              <Progressbar value={50} />
              <Typography sx={{ marginTop: 2, marginBottom: 1 }}>Power BI</Typography>
              <Progressbar value={75} />
            </Card>
          </Grid>
        </Grid>
      </div>
    </Sidebar>
  );
};

export default DashboardPage;
