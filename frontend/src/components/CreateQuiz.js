import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import QuizPage from "./QuizPage";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [quizzes, setQuizzes] = React.useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = React.useState(null);

  const handleClickOpen = (index = null) => {
    setCurrentQuizIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (quizData) => {
    if (currentQuizIndex !== null) {
      const updatedQuizzes = [...quizzes];
      updatedQuizzes[currentQuizIndex] = quizData;
      setQuizzes(updatedQuizzes);
    } else {
      setQuizzes([...quizzes, quizData]);
    }
    setOpen(false);
  };

  const handleDelete = (index) => {
    const updatedQuizzes = quizzes.filter((_, i) => i !== index);
    setQuizzes(updatedQuizzes);
    handleClose();
  };

  return (
    <React.Fragment>
      <Card sx={{ padding: "30px", height: "567px" }}>
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
          Add Quiz
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Box
            sx={{
              width: 200,
              height: 200,
              backgroundColor: "white",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: 3,
              border: "2px solid  lightgray",
              cursor: "pointer",
              marginTop: "10px",
              marginLeft: "15px",
            }}
            onClick={() => handleClickOpen()}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                color: " rgba(8, 145, 178, 1)",
                fontFamily: "Pacifico",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Quiz 1
            </Typography>
          </Box>
          {quizzes.map((quiz, index) => (
            <Box
              key={index}
              sx={{
                width: 200,
                height: 200,
                backgroundColor: "white",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                boxShadow: 3,
                border: "2px solid  lightgray",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "15px",
              }}
              onClick={() => handleClickOpen(index)}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: " rgba(8, 145, 178, 1)",
                  fontFamily: "Pacifico",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >{`Quiz ${index + 2}`}</Typography>
            </Box>
          ))}
          <Box
            sx={{
              width: 200,
              height: 200,
              backgroundColor: "lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,

              border: "2px solid rgba(240, 248, 255, 0.952)",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={() => handleClickOpen()}
          >
            <AddIcon sx={{ fontSize: 60, color: "gray" }} />
          </Box>
        </Box>

        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar
            sx={{
              position: "relative",
              background:
                "linear-gradient(to right, rgba(0, 172, 193, 0.8), rgba(67, 160, 71, 0.8))",
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon sx={{ fontWeight: "bold" }} />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {/* Quiz */}
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={() =>
                  handleSave(
                    `Quiz ${
                      currentQuizIndex !== null
                        ? currentQuizIndex + 1
                        : quizzes.length + 1
                    }`
                  )
                }
                sx={{ fontWeight: "bold" }}
              >
                Save
              </Button>
              {currentQuizIndex !== null && (
                <Button
                  color="inherit"
                  onClick={() => handleDelete(currentQuizIndex)}
                  sx={{ fontWeight: "bold" }}
                >
                  Delete
                </Button>
              )}
            </Toolbar>
          </AppBar>
          <List>
            <QuizPage
              quizData={
                currentQuizIndex !== null ? quizzes[currentQuizIndex] : null
              }
            />
          </List>
        </Dialog>
      </Card>
    </React.Fragment>
  );
}
