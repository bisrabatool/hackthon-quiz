 import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const StudentInfoPage = () => {
//   yh aesii ui check krny k liye h 
const [students, setStudents] = useState([
   { id: 178787, username: 'bisrabatool', email: 'bisra@gmail.com', course: 'web development' },
    { id: 789982, username: 'sameen', email: 'sameen@gmail.com', course: 'ui/ux' },
    
  ]);

  return (
    <Box
      sx={{
      minHeight: '100vh',
      display: 'flex',
       justifyContent: 'center',
        alignItems: 'center',
       background: 'linear-gradient(to right, #00C9FF, #92FE9D)',
     }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
           flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
            borderRadius: 2,
           boxShadow: 3,
            backgroundColor: 'white',
        }}
        >
          <Typography component="h1" variant="h5" gutterBottom>
            Registered Students
         </Typography>
         <TableContainer component={Paper}>
           <Table>
             <TableHead>
               <TableRow>
                 <TableCell>ID</TableCell>
                  <TableCell>Username</TableCell>
                   <TableCell>Email</TableCell>
                  <TableCell>Course</TableCell>
                </TableRow>
              </TableHead>
             <TableBody>
               {students.map((student) => (
                 <TableRow key={student.id}>
                   <TableCell>{student.id}</TableCell>
                   <TableCell>{student.username}</TableCell>
                  <TableCell>{student.email}</TableCell>
                   <TableCell>{student.course}</TableCell>
                  </TableRow>
                ))}
            </TableBody>   
                    </Table>
 
         </TableContainer>
       </Box>
      </Container>
    </Box>
   );
 };

export default StudentInfoPage;


