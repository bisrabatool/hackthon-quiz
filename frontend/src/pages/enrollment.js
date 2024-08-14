import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomDialog from "../components/DialogComponent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";

function Enrollment() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    course: "",
    batch: "",
    teacher: "",
    gender: "",
    rollNumber: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("showDialog") === "true") {
      setDialogOpen(true);
    }
  }, [location.search]);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { course, batch, teacher, gender, rollNumber } = formData;

    if (!course || !batch || !teacher || !gender || !rollNumber) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/enroll", {
        course,
        batch,
        teacher,
        gender,
        rollNumber,
      });

      if (response.data.status === "ok") {
        alert("Enroll successful!");
        setFormData({
          course: "",
          batch: "",
          teacher: "",
          gender: "",
          rollNumber: "",
        });

        navigate("/StdDashboard");
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error during enrollment:", error);
      alert("An error occurred during enrollment.");
    }
  };

  const courses = [
    { value: "web development", label: "Web Development" },
    { value: "python", label: "Python" },
    { value: "data science", label: "Data Science" },
    { value: "graphic design", label: "Graphic Design" },
  ];
  const batches = [
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];
  const teachers = [
    { value: "Miss Faiza", label: "Miss Faiza" },
    { value: "Miss Iqra", label: "Miss Iqra" },
    { value: "Sir Ghous", label: "Sir Ghous" },
    { value: "Sir Salman", label: "Sir Salman" },
  ];
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];

  return (
    <div>
      <CustomDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title="Student Enrollment Form"
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              required
              fullWidth
              label="Course"
              name="course"
              select
              variant="outlined"
              value={formData.course}
              onChange={handleChange}
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
            >
              {courses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              fullWidth
              label="Batch"
              name="batch"
              select
              variant="outlined"
              value={formData.batch}
              onChange={handleChange}
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
            >
              {batches.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              fullWidth
              label="Teacher"
              name="teacher"
              select
              variant="outlined"
              value={formData.teacher}
              onChange={handleChange}
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
            >
              {teachers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              fullWidth
              label="Gender"
              name="gender"
              select
              variant="outlined"
              value={formData.gender}
              onChange={handleChange}
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
            >
              {genderOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              fullWidth
              label="Roll Number"
              name="rollNumber"
              variant="outlined"
              value={formData.rollNumber}
              onChange={handleChange}
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

            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #0891b2, #16a34a)",
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </CustomDialog>
    </div>
  );
}

export default Enrollment;
