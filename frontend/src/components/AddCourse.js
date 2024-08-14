import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  List,
  IconButton,
  Collapse,
  Card,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

const CourseContainer = styled(Box)({
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
});

const CourseHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
});

const BatchContainer = styled(Box)({
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "8px",
  marginBottom: "8px",
});

const BatchHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "4px",
});

const HorizontalRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 0),
}));

const StudentCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
  const [newCourseName, setNewCourseName] = useState("");
  const [newBatchName, setNewBatchName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentRollNumber, setStudentRollNumber] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [expandedBatch, setExpandedBatch] = useState(null);
  const [showStudentList, setShowStudentList] = useState({});

  const handleAddCourse = () => {
    setCourses([...courses, { name: newCourseName, batches: [] }]);
    setNewCourseName("");
    setOpenAddCourseDialog(false);
  };

  const handleAddBatch = () => {
    setCourses(
      courses.map((course) =>
        course.name === currentCourse.name
          ? {
              ...course,
              batches: [
                ...course.batches,
                { name: newBatchName, students: [] },
              ],
            }
          : course
      )
    );
    setNewBatchName("");
    setOpenAddBatchDialog(false);
  };

  const handleAddStudent = () => {
    setCourses(
      courses.map((course) =>
        course.name === currentCourse.name
          ? {
              ...course,
              batches: course.batches.map((batch) =>
                batch.name === expandedBatch
                  ? {
                      ...batch,
                      students: [
                        ...batch.students,
                        { name: studentName, rollNumber: studentRollNumber },
                      ],
                    }
                  : batch
              ),
            }
          : course
      )
    );
    setStudentName("");
    setStudentRollNumber("");
    setOpenAddStudentDialog(false);
  };

  const handleAddTeacher = () => {
    setCourses(
      courses.map((course) =>
        course.name === currentCourse.name
          ? {
              ...course,
              batches: course.batches.map((batch) =>
                batch.name === expandedBatch
                  ? {
                      ...batch,
                      teachers: batch.teachers
                        ? [...batch.teachers, { name: teacherName }]
                        : [{ name: teacherName }],
                    }
                  : batch
              ),
            }
          : course
      )
    );
    setTeacherName("");
    setOpenAddTeacherDialog(false);
  };

  const handleDeleteStudent = (batchName, studentIndex) => {
    setCourses(
      courses.map((course) =>
        course.name === currentCourse.name
          ? {
              ...course,
              batches: course.batches.map((batch) =>
                batch.name === batchName
                  ? {
                      ...batch,
                      students: batch.students.filter(
                        (_, idx) => idx !== studentIndex
                      ),
                    }
                  : batch
              ),
            }
          : course
      )
    );
  };

  const CourseBox = ({ course }) => {
    const handleBatchToggle = (batchName) => {
      setExpandedBatch(expandedBatch === batchName ? null : batchName);
    };

    const handleStudentToggle = (batchName) => {
      setShowStudentList({
        ...showStudentList,
        [batchName]: !showStudentList[batchName],
      });
    };

    return (
      <CourseContainer sx={{ borderRadius: 2, padding: 5, boxShadow: 3 }}>
        <CourseHeader>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(8, 145, 178, 1)",
              fontFamily: "Pacifico",
              fontWeight: "400",
              fontStyle: "normal",
            }}
          >
            {course.name}{" "}
          </Typography>
        </CourseHeader>

        {course.batches.map((batch, i) => (
          <BatchContainer
            key={i}
            sx={{ borderRadius: 2, boxShadow: 3, padding: 3 }}
          >
            <BatchHeader>
              <Box flex={1}>
                <Typography variant="subtitle1">{batch.name}</Typography>
              </Box>

              <Box flex={1}>
                <Typography variant="subtitle1">
                  {batch.teachers && batch.teachers.length > 0
                    ? batch.teachers[0].name
                    : "No Teacher"}
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
                      <StudentCard
                        key={idx}
                        sx={{
                          boxShadow: 2,
                          paddingLeft: 2,
                        }}
                      >
                        <StudentName variant="body1">
                          {student.name}
                        </StudentName>
                        <StudentRollNumber variant="body2">
                          {student.rollNumber}
                        </StudentRollNumber>
                        <IconButton
                          onClick={() => handleDeleteStudent(batch.name, idx)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </StudentCard>
                    ))}
                    <Button
                      variant="outlined"
                      sx={{
                        marginTop: "20px",
                        background: "linear-gradient(135deg, #0891b2, #16a34a)",
                        color: "white",
                        borderColor: "transparent",
                        fontWeight: "bold",
                        borderRadius: 2,
                        boxShadow: 3,
                      }}
                      startIcon={<AddIcon />}
                      onClick={() => setOpenAddStudentDialog(true)}
                    >
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
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                background: "linear-gradient(135deg, #0891b2, #16a34a)",
                color: "white",
                borderColor: "transparent",
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 3,
              }}
              onClick={() => {
                setCurrentCourse(course);
                setOpenAddBatchDialog(true);
              }}
            >
              Add Batch
            </Button>
          </Box>
          <Box flex={1} />
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{
              background: "linear-gradient(135deg, #0891b2, #16a34a)",
              color: "white",
              borderColor: "transparent",
              fontWeight: "bold",
              borderRadius: 2,
              boxShadow: 3,
            }}
            onClick={() => {
              setCurrentCourse(course);
              setOpenAddTeacherDialog(true);
            }}
          >
            Add Teacher
          </Button>
        </HorizontalRow>
      </CourseContainer>
    );
  };

  return (
    <Card sx={{ padding: "30px", backgroundColor: "white", height: "1500px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: " rgba(8, 145, 178, 1)",
          fontSize: "50px",
          fontFamily: "Pacifico",
          fontWeight: "400",
          fontStyle: "normal",
        }}
      >
        Add Course
      </Typography>

      <Button
        variant="contained"
        onClick={() => setOpenAddCourseDialog(true)}
        sx={{
          marginBottom: 2,
          background: "linear-gradient(135deg, #0891b2, #16a34a)",
          color: "white",
          borderColor: "transparent",
          fontWeight: "bold",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <AddIcon sx={{ fontWeight: "bold" }} /> Add Course
      </Button>

      {courses.map((course, i) => (
        <CourseBox key={i} course={course} />
      ))}

      <Dialog
        open={openAddCourseDialog}
        onClose={() => setOpenAddCourseDialog(false)}
      >
        <DialogTitle>Add New Course</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            fullWidth
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
            sx={{
              marginTop: "10px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                  borderImageSlice: 1,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenAddCourseDialog(false)}
            color="primary"
            sx={{ color: " rgba(8, 145, 178, 1)" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddCourse}
            color="primary"
            sx={{ color: " rgba(8, 145, 178, 1)" }}
          >
            Add Course
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openAddBatchDialog}
        onClose={() => setOpenAddBatchDialog(false)}
      >
        <DialogTitle>Add New Batch</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Batch Name"
            fullWidth
            value={newBatchName}
            onChange={(e) => setNewBatchName(e.target.value)}
            sx={{
              marginTop: "10px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                  borderImageSlice: 1,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenAddBatchDialog(false)}
            color="primary"
            sx={{ color: " rgba(8, 145, 178, 1)" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddBatch}
            color="primary"
            sx={{ color: " rgba(8, 145, 178, 1)" }}
          >
            Add Batch
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openAddStudentDialog}
        onClose={() => setOpenAddStudentDialog(false)}
      >
        <DialogTitle>Add New Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Student Name"
            fullWidth
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            sx={{
              marginTop: "10px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                  borderImageSlice: 1,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
              },
            }}
          />
          <TextField
            margin="dense"
            label="Roll Number"
            fullWidth
            value={studentRollNumber}
            onChange={(e) => setStudentRollNumber(e.target.value)}
            sx={{
              marginTop: "10px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                  borderImageSlice: 1,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenAddStudentDialog(false)}
            color="primary"
            sx={{ color: " rgba(8, 145, 178, 1)" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddStudent}
            color="primary"
            sx={{ color: " rgba(8, 145, 178, 1)" }}
          >
            Add Student
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openAddTeacherDialog}
        onClose={() => setOpenAddTeacherDialog(false)}
      >
        <DialogTitle>Add New Teacher</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Teacher Name"
            fullWidth
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            sx={{
              marginTop: "10px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                  borderImageSlice: 1,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                  borderImage:
                    "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74, 1)) 1",
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenAddTeacherDialog(false)}
            sx={{ color: " rgba(8, 145, 178, 1)" }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddTeacher}
            color="primary"
            sx={{ color: " rgba(8, 145, 178, 1)" }}
          >
            Add Teacher
          </Button>
        </DialogActions>
      </Dialog>
      <Card sx={{ borderRadius: 2, marginBottom: 3, padding: 5, boxShadow: 3 }}>
        <CourseHeader>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(8, 145, 178, 1)",
              fontFamily: "Pacifico",
              fontWeight: "400",
              fontStyle: "normal",
            }}
          >
            Web Development{" "}
          </Typography>
        </CourseHeader>

        <BatchContainer sx={{ borderRadius: 2, boxShadow: 3, padding: 3 }}>
          <BatchHeader>
            <Box flex={1}>
              <Typography variant="subtitle1">2022</Typography>
            </Box>

            <Box flex={1}>
              <Typography variant="subtitle1">Miss Faiza</Typography>
            </Box>

            <Box>
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            </Box>
          </BatchHeader>

          <Box>
            <HorizontalRow>
              <Box flex={1}>
                <Typography variant="subtitle2">Student Name</Typography>
              </Box>
              <Box flex={1}>
                <Typography variant="subtitle2">Roll Number</Typography>
              </Box>
              <Box>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
            </HorizontalRow>
            {/* <Collapse >
                  <List> */}

            <StudentCard
              sx={{
                boxShadow: 2,
                paddingLeft: 2,
              }}
            >
              <StudentName variant="body1">Bisra Batool</StudentName>
              <StudentRollNumber variant="body2">450170</StudentRollNumber>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </StudentCard>
            <StudentCard
              sx={{
                boxShadow: 2,
                paddingLeft: 2,
              }}
            >
              <StudentName variant="body1">Sameen</StudentName>
              <StudentRollNumber variant="body2">450180</StudentRollNumber>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </StudentCard>

            <Button
              variant="outlined"
              sx={{
                marginTop: "20px",
                background: "linear-gradient(135deg, #0891b2, #16a34a)",
                color: "white",
                borderColor: "transparent",
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 3,
              }}
              startIcon={<AddIcon sx={{ fontWeight: "bold" }} />}
            >
              Add Student
            </Button>
            {/* </List>
                </Collapse> */}
          </Box>
        </BatchContainer>

        <HorizontalRow>
          <Box flex={1}>
            <Button
              variant="outlined"
              startIcon={<AddIcon sx={{ fontWeight: "bold" }} />}
              sx={{
                background: "linear-gradient(135deg, #0891b2, #16a34a)",
                color: "white",
                borderColor: "transparent",
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              Add Batch
            </Button>
          </Box>
          <Box flex={1} />
          <Button
            variant="outlined"
            startIcon={<AddIcon sx={{ fontWeight: "bold" }} />}
            sx={{
              background: "linear-gradient(135deg, #0891b2, #16a34a)",
              color: "white",
              borderColor: "transparent",
              fontWeight: "bold",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            Add Teacher
          </Button>
        </HorizontalRow>
      </Card>
    </Card>
  );
};

export default CoursesManagement;
