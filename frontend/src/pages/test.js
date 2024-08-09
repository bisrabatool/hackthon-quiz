import React from 'react';
import Sidebar from '../components/Slider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import myImage from "../assets/smitlogo.png";


const DashboardPage = () => {
  const menuItems = {
    main: [
      { icon: <DashboardIcon />, text: 'Student Info', onClick: () => console.log('Dashboard Clicked') },
      { icon: <ShoppingCartIcon />, text: 'Quiz Category', onClick: () => console.log('Orders Clicked') },
      { icon: <PeopleIcon />, text: 'Feedback', onClick: () => console.log('Customers Clicked') },
      { icon: <BarChartIcon />, text: 'Score', onClick: () => console.log('Reports Clicked') },
      
    ],
    secondary: [] // No secondary items (reports) to show
  };

  return (
    <Sidebar
      logo={myImage}
      menuItems={menuItems}
      showSubheader={false} // Do not show the subheader
    />
  );
};

export default DashboardPage;
