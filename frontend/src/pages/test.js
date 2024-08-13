import React, { useState } from 'react';
import Sidebar from '../components/Slider';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import CreateIcon from '@mui/icons-material/Create'; 
import BarChartIcon from '@mui/icons-material/BarChart'; 
import myImage from "../assets/smitlogo.png";
import AddCourse from '../components/AddCourse';
import CreateQuiz from '../components/CreateQuiz';

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
          { icon: <HomeIcon  sx={{color: " rgba(8, 145, 178, 1)"}}/>, text: 'Home' , onClick: () => setActiveComponent(null) },
          { icon: <AddBoxIcon sx={{color: " rgba(8, 145, 178, 1)"}}/>, text: 'Add Course', onClick: () => handleSidebarClick({ text: 'Add Course' }) },
          { icon: <CreateIcon sx={{color: " rgba(8, 145, 178, 1)"}}/>, text: 'Create Quiz', onClick: () => handleSidebarClick({ text: 'Create Quiz' }) },
          { icon: <BarChartIcon sx={{color: " rgba(8, 145, 178, 1)"}}/>, text: 'Progress', onClick: () => console.log('Progress Clicked') },
        ]
      }}
    >
      <div className='mt-5'>
        {activeComponent === 'AddCourse' && <AddCourse />}
        {activeComponent === 'CreateQuiz' && <CreateQuiz />}
      </div>
    </Sidebar>
  );
};

export default DashboardPage;

