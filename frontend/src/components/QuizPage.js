import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CreateQuiz = ({ quizData, onSave }) => {
  const [questions, setQuestions] = useState(quizData?.questions || []);
  const [course, setCourse] = useState(quizData?.course || '');
  const [batch, setBatch] = useState(quizData?.batch || '');
  const [teacher, setTeacher] = useState(quizData?.teacher || '');
  const [courseModule, setCourseModule] = useState(quizData?.courseModule || '');
  const [timeLimit, setTimeLimit] = useState(quizData?.timeLimit || '');
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);


  
  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setCurrentQuestionIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionTypeSelect = (optionType) => {
    if (currentQuestionIndex !== null) {
      const newQuestions = [...questions];
      newQuestions[currentQuestionIndex].optionType = optionType;
      newQuestions[currentQuestionIndex].options.push({
        text: "",
        isCorrect: false,
      });
      setQuestions(newQuestions);
    }
    handleMenuClose();
  };

  const addQuestion = (type) => {
    setQuestions([
      ...questions,
      {
        type,
        content: "",
        options: [],
        optionType: "",
        image: "",
        video: "",
        correctAnswer: "",
        points: "",
      },
    ]);
  };

  const handleContentChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].content = event.target.value;
    setQuestions(newQuestions);
  };

  const handlePointsChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].points = event.target.value;
    setQuestions(newQuestions);
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    const newQuestions = [...questions];
    const url = URL.createObjectURL(file);

    if (file.type.startsWith("image/")) {
      newQuestions[index].image = url;
      newQuestions[index].imageSelected = true;
    } else if (file.type.startsWith("video/")) {
      newQuestions[index].video = url;
      newQuestions[index].videoSelected = true;
    }

    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, optionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[optionIndex].text = event.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctAnswer = event.target.value;
    setQuestions(newQuestions);
  };

  const handleDeleteOption = (qIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.splice(optionIndex, 1);
    setQuestions(newQuestions);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      course,
      batch,
      teacher,
      courseModule,
      timeLimit: parseInt(timeLimit, 10),
      questions: questions.map((q) => ({
        type: q.type,
        content: q.content,
        options: q.options,
        correctAnswer: q.correctAnswer,
        points: q.points,
        image: q.image,
        video: q.video,
      })),
      
    };


   try {
      const response = await axios.post('http://localhost:5000/create-quiz', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Quiz saved successfully');
      console.log('Response:', response.data);
      onSave(response.data);
    } catch (error) {
      console.error('Error saving quiz:', error);
    }
  };
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{ p: 3, borderRadius: "20px", marginBottom: "30px" }}
      >
        <form onSubmit={handleSubmit}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            color: " rgba(8, 145, 178, 1)",
            fontSize: "50px",
            fontFamily: "Pacifico",
            fontWeight: "400",
            fontStyle: "normal",
          }}
          className="pacifico-regular"
        >
          Create Quiz
        </Typography>
        <TextField
          fullWidth
          label="Course"
          variant="outlined"
          margin="normal"
          required
          value={course}
         onChange={(e) => setCourse(e.target.value)} 
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
          fullWidth
          label="Batch"
          variant="outlined"
          margin="normal"
          required
          value={batch}
          onChange={(e) => setBatch(e.target.value)} 
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
          fullWidth
          label="Teacher"
          variant="outlined"
          margin="normal"
          required
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)} 
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
          fullWidth
          label="Course Module"
          variant="outlined"
          margin="normal"
          required
          value={courseModule} 
          onChange={(e) => setCourseModule(e.target.value)} 
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

        {/* Timer Option */}
        <TextField
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
          fullWidth
          label="Time Limit (in minutes)"
          variant="outlined"
          margin="normal"
          value={timeLimit}
          onChange={(e) => setTimeLimit(e.target.value)}
          InputProps={{
            startAdornment: (
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
            ),
          }}
        />

        <Typography
          variant="h6"
          gutterBottom
          sx={{ mt: 3, color: " rgba(8, 145, 178, 1)", fontSize: "33px" , fontFamily: "Pacifico",
            fontWeight: "400",
            fontStyle: "normal",}} className="pacifico-regular"
        >
          Add Questions
        </Typography>

        {questions.map((q, index) => (
          <Box key={index} sx={{ mb: 3, position: "relative" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {q.type === "text" && (
                <TextField
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
                  fullWidth
                  label={`Question ${index + 1} (Text)`}
                  variant="outlined"
                  value={q.content}
                  onChange={(e) => handleContentChange(index, e)}
                  margin="normal"
                />
              )}

              {q.type === "photo" && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {!q.imageSelected ? (
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<PhotoCamera />}
                      sx={{
                        background: "linear-gradient(135deg, #0891b2, #16a34a)",
                        color: "white",
                        borderColor: "transparent",
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      Upload Photo
                      <input
                        type="file"
                        id={`upload-image-${index}`}
                        hidden
                        accept="image/*"
                        onChange={(e) => handleFileChange(index, e)}
                      />
                    </Button>
                  ) : (
                    <Box sx={{ mt: 2 }}>
                      <img
                        src={q.image}
                        alt={`Question ${index + 1}`}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "200px",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  )}
                </Box>
              )}

              {q.type === "video" && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {!q.videoSelected ? (
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<VideoLibraryIcon />}
                      sx={{
                        background: "linear-gradient(135deg, #0891b2, #16a34a)",
                        color: "white",
                        borderColor: "transparent",
                        fontWeight: "bold",
                        mb: 2,
                      }}
                    >
                      Upload Video
                      <input
                        type="file"
                        hidden
                        accept="video/*"
                        onChange={(e) => handleFileChange(index, e)}
                      />
                    </Button>
                  ) : (
                    <Box sx={{ mt: 2 }}>
                      <video
                        controls
                        src={q.video}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "200px",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  )}
                </Box>
              )}

              <IconButton
                onClick={() => handleDeleteQuestion(index)}
                sx={{ ml: 2 }}
              >
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </Box>

            {/* Points Field */}
            <TextField
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
              fullWidth
              label="Points"
              variant="outlined"
              margin="normal"
              type="number"
              value={q.points}
              onChange={(e) => handlePointsChange(index, e)}
              InputProps={{
                startAdornment: (
                  <ListItemIcon>
                    <TextFormatIcon />
                  </ListItemIcon>
                ),
              }}
            />

            {q.options.length > 0 && (
              <Box>
                {q.options.map((option, optionIndex) => (
                  <Box
                    key={optionIndex}
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                  >
                    {q.optionType === "radio" && (
                      <FormControlLabel
                        control={<Radio />}
                        label={
                          <TextField
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
                            fullWidth
                            label={`Option ${optionIndex + 1}`}
                            variant="outlined"
                            margin="normal"
                            value={option.text}
                            onChange={(e) =>
                              handleOptionChange(index, optionIndex, e)
                            }
                          />
                        }
                      />
                    )}

                    {q.optionType === "checkbox" && (
                      <FormControlLabel
                        control={<Checkbox />}
                        label={
                          <TextField
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
                            fullWidth
                            label={`Option ${optionIndex + 1}`}
                            variant="outlined"
                            margin="normal"
                            value={option.text}
                            onChange={(e) =>
                              handleOptionChange(index, optionIndex, e)
                            }
                          />
                        }
                      />
                    )}

                    {q.optionType === "text" && (
                      <TextField
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
                        fullWidth
                        label={`Option ${optionIndex + 1}`}
                        variant="outlined"
                        margin="normal"
                        value={option.text}
                        onChange={(e) =>
                          handleOptionChange(index, optionIndex, e)
                        }
                      />
                    )}

                    <IconButton
                      onClick={() => handleDeleteOption(index, optionIndex)}
                      sx={{ ml: 1 }}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}

            {/* Correct Answer Input */}
            {q.options.length > 0 && (
              <TextField
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
                fullWidth
                label="Correct Answer"
                variant="outlined"
                margin="normal"
                value={q.correctAnswer}
                onChange={(e) => handleCorrectAnswerChange(index, e)}
              />
            )}

            {/* Option Type Dropdown */}
            <Box sx={{ mt: 2 }}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(e) => handleMenuClick(e, index)}
                endIcon={<AddIcon />}
              >
                Add Option
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleOptionTypeSelect("text")}>
                  <ListItemIcon>
                    <TextFieldsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Text Option" />
                </MenuItem>
                <MenuItem onClick={() => handleOptionTypeSelect("checkbox")}>
                  <ListItemIcon>
                    <CheckBoxOutlineBlankIcon />
                  </ListItemIcon>
                  <ListItemText primary="Checkbox Option" />
                </MenuItem>
                <MenuItem onClick={() => handleOptionTypeSelect("radio")}>
                  <ListItemIcon>
                    <RadioButtonUncheckedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Radio Option" />
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        ))}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            sx={{
              background: "linear-gradient(135deg, #0891b2, #16a34a)",
              color: "white",
              borderColor: "transparent",
              fontWeight: "bold",
            }}
            variant="outlined"
            startIcon={<TextFieldsIcon />}
            onClick={() => addQuestion("text")}
          >
            Add Text
          </Button>
          <Button
            sx={{
              background: "linear-gradient(135deg, #0891b2, #16a34a)",
              color: "white",
              borderColor: "transparent",
              fontWeight: "bold",
            }}
            variant="outlined"
            startIcon={<PhotoCamera />}
            onClick={() => addQuestion("photo")}
          >
            Add Photo
          </Button>
          <Button
            sx={{
              background: "linear-gradient(135deg, #0891b2, #16a34a)",
              color: "white",
              borderColor: "transparent",
              fontWeight: "bold",
            }}
            variant="outlined"
            startIcon={<VideoLibraryIcon />}
            onClick={() => addQuestion("video")}
          >
            Add Video
          </Button>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{
            mt: 5,
            background: "linear-gradient(135deg, #0891b2, #16a34a)",
            color: "white",
            borderColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Create Quiz
        </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateQuiz;
