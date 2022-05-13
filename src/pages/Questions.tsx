import { useEffect, useState } from "react";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import questions from "../questions.json";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Question.css';

const TOTAL_QUESTIONS = questions.length;

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  function handleNextButtonClick(index: number) {
    if (index === TOTAL_QUESTIONS - 1) {
      navigate("/results");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  function handleChange(question: any) {
    setCurrentQuestion(question);
    question.target.style.color = 'red';
}

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        questions.map(
          (question, index) =>
            currentQuestion === question.id && (
              <Box key={question.id}>
                <Typography variant="h3">Question: {index + 1}
                <Button className="question-no" id="1" variant="contained" onClick={() => handleChange(1)}>1</Button>
                   <Button className="question-no" id="2" variant="contained" onClick={() => handleChange(2)}>2</Button>
                   <Button className="question-no" id="3" variant="contained" onClick={() => handleChange(3)}>3</Button>
                   <Button className="question-no" id="4" variant="contained" onClick={() => handleChange(4)}>4</Button>
                   <Button className="question-no" id="5" variant="contained" onClick={() => handleChange(5)}>5</Button>
                </Typography>
                <Box
                  height="500px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <QuestionCard
                    id={question.id}
                    question={question.question}
                    questionType={question.questionType as QuestionType}
                    answers={question.answerOptions}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      disabled={index === 0}
                      onClick={() => setCurrentQuestion((prev) => prev - 1)}
                    >
                      Previous
                    </Button>

                    <Button onClick={() => handleNextButtonClick(index)}>
                      {index === TOTAL_QUESTIONS - 1 ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </Box>
              </Box>
            )
        )
      )}
    </Box>
  );
};

export default Questions;
