import React from 'react';
import Sidebar from '../components/Slider';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import CreateIcon from '@mui/icons-material/Create'; 
import BarChartIcon from '@mui/icons-material/BarChart'; 
import myImage from "../assets/smitlogo.png";

const DashboardPage = () => {
  
  return (
    <Sidebar
      logo={myImage}
      menuItems={{
        main: [
          { icon: <HomeIcon  sx={{color: " rgba(8, 145, 178, 1)"}}/>, text: 'Home' , onClick: () => console.log() },
          { icon: <AddBoxIcon sx={{color: " rgba(8, 145, 178, 1)"}}/>, text: 'Add Course', onClick: () => console.log("Progress Clicked") },
          { icon: <CreateIcon sx={{color: " rgba(8, 145, 178, 1)"}}/>, text: 'Create Quiz', onClick: () => console.log("") },
          { icon: <BarChartIcon sx={{color: " rgba(8, 145, 178, 1)"}}/>, text: 'Progress', onClick: () => console.log('Progress Clicked') },
        ]
      }}
    >
      <div className=''>
  
      </div>
    </Sidebar>
  );
};

export default DashboardPage;

