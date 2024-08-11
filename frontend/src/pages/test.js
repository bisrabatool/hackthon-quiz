import React, { useState } from 'react';
import Sidebar from '../components/Slider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import myImage from "../assets/smitlogo.png";
import AddCourse from '../components/AddCourse';

const DashboardPage = () => {
  const [showAddCourse, setShowAddCourse] = useState(false);

  const handleSidebarClick = (item) => {
    if (item.text === 'Add Course') {
      setShowAddCourse(true); 
    } else {
      console.log(`${item.text} Clicked`);
    }
  };

  return (
    <Sidebar
      logo={myImage}
      menuItems={{
        main: [
          { icon: <DashboardIcon />, text: 'Home', onClick: () => console.log('Dashboard Clicked') },
          { icon: <ShoppingCartIcon />, text: 'Add Course', onClick: () => handleSidebarClick({ text: 'Add Course' }) },
          { icon: <PeopleIcon />, text: 'Create Quiz', onClick: () => console.log('Test Series Clicked') },
          { icon: <BarChartIcon />, text: 'Progress', onClick: () => console.log('Dashboard Clicked') },
        ]
      }}
    >  <div className='mt-5'>
      {showAddCourse && <AddCourse />}
      </div>
    </Sidebar>
  );
};

export default DashboardPage;
