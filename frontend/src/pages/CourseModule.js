import React from "react";
import Title from "../components/layout/CourseTitle";
import CourseCard from ".//CourseCard";
import { CourseData } from "../data/CourseData";
const CourseModule = () => {
  return (
    <section
      id="course"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Courses We Offer:)" des="Course Module" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {CourseData.map((item) => (
          <CourseCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default CourseModule;

// import React from 'react';
// import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemButton from '@mui/material/ListItemButton';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import Button from '@mui/material/Button'; // Add this import for the Button component

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function FullScreenDialog({ triggerComponent }) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       {/* Trigger component for opening the dialog */}
//       <div onClick={handleClickOpen}>
//         {triggerComponent}
//       </div>
      
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//       >
//         <AppBar sx={{ position: 'relative' }}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//               Sound
//             </Typography>
//             <Button autoFocus color="inherit" onClick={handleClose}>
//               Save
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <List>
//           <ListItemButton>
//             <ListItemText primary="Phone ringtone" secondary="Titania" />
//           </ListItemButton>
//           <Divider />
//           <ListItemButton>
//             <ListItemText
//               primary="Default notification ringtone"
//               secondary="Tethys"
//             />
//           </ListItemButton>
//         </List>
//       </Dialog>
//     </React.Fragment>
//   );
// }
