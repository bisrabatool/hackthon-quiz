import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, List, IconButton, Collapse, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';


const AddCourseButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const CourseContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  marginBottom: theme.spacing(3),
}));

const CourseHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const BatchContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const BatchHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
}));

const HorizontalRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
}));

const StudentCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StudentName = styled(Typography)(({ theme }) => ({
  flex: 1,
}));

const StudentRollNumber = styled(Typography)(({ theme }) => ({
  flex: 1,
}));

const CoursesManagement = () => {
  const [courses, setCourses] = useState([]);
  const [openAddCourseDialog, setOpenAddCourseDialog] = useState(false);
  const [openAddBatchDialog, setOpenAddBatchDialog] = useState(false);
  const [openAddStudentDialog, setOpenAddStudentDialog] = useState(false);
  const [openAddTeacherDialog, setOpenAddTeacherDialog] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [newCourseName, setNewCourseName] = useState('');
  const [newBatchName, setNewBatchName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentRollNumber, setStudentRollNumber] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [expandedBatch, setExpandedBatch] = useState(null);
  const [showStudentList, setShowStudentList] = useState({});

  const handleAddCourse = () => {
    setCourses([...courses, { name: newCourseName, batches: [] }]);
    setNewCourseName('');
    setOpenAddCourseDialog(false);
  };

  const handleAddBatch = () => {
    setCourses(courses.map(course =>
      course.name === currentCourse.name
        ? { ...course, batches: [...course.batches, { name: newBatchName, students: []}] }
        : course
    ));
    setNewBatchName('');
    setOpenAddBatchDialog(false);
  };

  const handleAddStudent = () => {
    setCourses(courses.map(course =>
      course.name === currentCourse.name
        ? {
            ...course,
            batches: course.batches.map(batch =>
              batch.name === expandedBatch
                ? { ...batch, students: [...batch.students, { name: studentName, rollNumber: studentRollNumber }] }
                : batch
            )
          }
        : course
    ));
    setStudentName('');
    setStudentRollNumber('');
    setOpenAddStudentDialog(false);
  };

  const handleAddTeacher = () => {
    setCourses(courses.map(course =>
      course.name === currentCourse.name
        ? {
            ...course,
            batches: course.batches.map(batch =>
              batch.name === expandedBatch
                ? { ...batch, teachers: batch.teachers ? [...batch.teachers, { name: teacherName }] : [{ name: teacherName }] }
                : batch
            )
          }
        : course
    ));
    setTeacherName('');
    setOpenAddTeacherDialog(false);
  };

  const CourseBox = ({ course }) => {
    const handleBatchToggle = (batchName) => {
      setExpandedBatch(expandedBatch === batchName ? null : batchName);
    };

    const handleStudentToggle = (batchName) => {
      setShowStudentList({
        ...showStudentList,
        [batchName]: !showStudentList[batchName]
      });
    };

    return (
      <CourseContainer>
        <CourseHeader>
          <Typography variant="h6">{course.name}</Typography>
        </CourseHeader>

        {course.batches.map((batch, i) => (
          <BatchContainer key={i}>
            <BatchHeader>
              <Box flex={1}>
                <Typography variant="subtitle1">{batch.name}</Typography>
              </Box>

              <Box flex={1}>
                <Typography variant="subtitle1">
                  {batch.teachers && batch.teachers.length > 0 ? batch.teachers[0].name : 'No Teacher'}
                </Typography>
              </Box>

              <Box>
                <IconButton onClick={() => handleBatchToggle(batch.name)}>
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
            </BatchHeader>

            {expandedBatch === batch.name && (
              <Box>
                <HorizontalRow>
                  <Box flex={1}>
                    <Typography variant="subtitle2">Student Name</Typography>
                  </Box>
                  <Box flex={1}>
                    <Typography variant="subtitle2">Roll Number</Typography>
                  </Box>
                  <Box>
                    <IconButton onClick={() => handleStudentToggle(batch.name)}>
                      <ExpandMoreIcon />
                    </IconButton>
                  </Box>
                </HorizontalRow>
                <Collapse in={showStudentList[batch.name]}>
                  <List>
                    {batch.students.map((student, idx) => (
                      <StudentCard key={idx}>
                        <StudentName variant="body1">{student.name}</StudentName>
                        <StudentRollNumber variant="body2">{student.rollNumber}</StudentRollNumber>
                      </StudentCard>
                    ))}
                    <Button variant="outlined" startIcon={<AddIcon />} onClick={() => setOpenAddStudentDialog(true)}>
                      Add Student
                    </Button>
                  </List>
                </Collapse>
              </Box>
            )}
          </BatchContainer>
        ))}
        <HorizontalRow>
          <Box flex={1}>
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => { setCurrentCourse(course); setOpenAddBatchDialog(true); }}>
              Add Batch
            </Button>
          </Box>
          <Box flex={1} />
          <Button variant="outlined" startIcon={<AddIcon />} onClick={() => { setCurrentCourse(course); setOpenAddTeacherDialog(true); }}>
            Add Teacher
          </Button>
        </HorizontalRow>
      </CourseContainer>
    );
  };

  return (
    <Box sx={{ padding: 2 }}>
      <AddCourseButton variant="contained" color="primary" onClick={() => setOpenAddCourseDialog(true)}>
        Add Course
      </AddCourseButton>

      {courses.map((course, i) => (
        <CourseBox key={i} course={course} />
      ))}

      <Dialog open={openAddCourseDialog} onClose={() => setOpenAddCourseDialog(false)}>
        <DialogTitle>Add New Course</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            fullWidth
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddCourseDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddCourse} color="primary">
            Add Course
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openAddBatchDialog} onClose={() => setOpenAddBatchDialog(false)}>
        <DialogTitle>Add New Batch</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Batch Name"
            fullWidth
            value={newBatchName}
            onChange={(e) => setNewBatchName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddBatchDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddBatch} color="primary">
            Add Batch
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openAddStudentDialog} onClose={() => setOpenAddStudentDialog(false)}>
        <DialogTitle>Add New Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Student Name"
            fullWidth
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Roll Number"
            fullWidth
            value={studentRollNumber}
            onChange={(e) => setStudentRollNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddStudentDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddStudent} color="primary">
            Add Student
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openAddTeacherDialog} onClose={() => setOpenAddTeacherDialog(false)}>
        <DialogTitle>Add New Teacher</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Teacher Name"
            fullWidth
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddTeacherDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddTeacher} color="primary">
            Add Teacher
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CoursesManagement;
