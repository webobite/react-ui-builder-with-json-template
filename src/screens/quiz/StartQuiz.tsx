import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import ReactModal from "react-modal";
import React, { useContext, useState } from "react";
import "./common.css";
import QuizContentScreen from "../../components/QuizApp/QuizContentScreen";
import { questionGeneraterWithJSONFormat } from "../../utils/quiz/utils";
import { jsQuestions } from "../../utils/quiz/utils/questions";
import { componentProps, templateList, uiJson } from "../../utils";
import { GET_ALL_COMPONENTS } from "../../utils/componentConfigs";
import QuestionSlider from "../../components/QuizApp/QuestionSlider";
import QuestionListView from "../../components/QuizApp/QuestionListView";
import { AuthContext } from "../../context/AuthContectProvider";

const StartQuiz = () => {
  const [OpenTestModal, setOpenTestModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const authContext = useContext(AuthContext);
  const startTestButtonHandler = (viewToRender: 'listView' | 'slideView') => {
    setModalContent(viewToRender);
    setOpenTestModal(true);
  };

  const endTestButtonHandler = () => {
    setOpenTestModal(false);
  };

  const handleCloseFromModal = () => {
    setOpenTestModal(false);
  };

  function createData(name: string, calories: number) {
    return { name, calories };
  }

  const rows = [
    createData("Total no of Questions", 10),
    createData("Question Answered", 0),
    createData("Question Not Answered", 0),
  ];

  // console.log(questionGeneraterWithJSONFormat(jsQuestions));
  const componentsData = questionGeneraterWithJSONFormat(jsQuestions)


  return (
    <Box className="main-layout-wrap">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz App
          </Typography>
          <Button color="inherit" onClick={authContext.logout}>Log out</Button>
        </Toolbar>
      </AppBar>
      <div className="quiz-start-btn-wrap">
        <ReactModal isOpen={OpenTestModal} contentLabel="Minimal Modal Example" ariaHideApp={false}>
          {
            modalContent && modalContent === 'slideView' ? <QuestionSlider getComponentList={GET_ALL_COMPONENTS} layoutConfigs={templateList} componentsData={componentsData} /> : null
          }
          {
            modalContent && modalContent === 'listView' ? <QuestionListView getComponentList={GET_ALL_COMPONENTS} layoutConfigs={templateList} componentsData={componentsData} /> : null
          }
          <button onClick={handleCloseFromModal}>Close Modal</button>
        </ReactModal>
        <div className="quiz-info-wrapper">
          <span className="quiz-information">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 150 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Test Information (Demo Data rendered)</TableCell>
                    <TableCell align="right">Values</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </span>
          <Button
            className="quiz-start-btn"
            variant="contained"
            color="success"
            onClick={() => startTestButtonHandler('slideView')}
          >
            Start Slide View Test
          </Button>
          <Button
            className="quiz-start-btn"
            variant="contained"
            color="success"
            onClick={() => startTestButtonHandler('listView')}
          >
            Start in List View Test
          </Button>
        </div>

        <Button
          className="quiz-end-btn"
          variant="contained"
          color="error"
          onClick={endTestButtonHandler}
        >
          End Test
        </Button>
      </div>
    </Box>
  );
};

export default StartQuiz;
