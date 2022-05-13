import React, { useContext } from "react";
import { AppContext } from "../App";
import questions from "../questions.json";
import "./Results.css"

const Results = () => {
  const [appData] = useContext(AppContext);

  const userFirst=appData.answers["1"].value;
  const userSecond=appData.answers["2"].value[0]+appData.answers["2"].value[1]+appData.answers["2"].value[2]+appData.answers["2"].value[3];
  const userThird=appData.answers["3"].value;
  const userFourth=appData.answers["4"].value;
  const userFifth=appData.answers["5"].value[0]+appData.answers["5"].value[1]+appData.answers["5"].value[2]+appData.answers["5"].value[4];

  const rightFirst = questions[0].answerOptions[0].option;
  const rightSecond = questions[1].answerOptions[0].option + questions[1].answerOptions[1].option;
  const rightThird=questions[2].answerOptions[0].option;
  const rightFourth=questions[3].answerOptions[1].option;
  const rightFifth=questions[4].answerOptions[0].option+questions[4].answerOptions[1].option;

  const wrongAns = [];

  if(userFirst!=rightFirst) {
    wrongAns.push(userFirst);
  }
  if(userSecond!=rightSecond) {
    wrongAns.push(userSecond);
  }
  if(userThird!=rightThird) {
    wrongAns.push(userThird);
  }
  if(userFourth!=rightFourth) {
    wrongAns.push(userFourth);
  }
  if(userFifth!=rightFifth) {
    wrongAns.push(userFifth);
  }

  return (
    <div className="container">
    <div>
      <h3>Your Answers are : </h3>
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <p key={currentIndex}>{answer.value}</p>
      ))}
    </div>
        <div>
          <h3>Correct Answers are : </h3>
          <ol>
            <li>{rightFirst}</li>
            <li>{rightSecond}</li>
            <li>{rightThird}</li>
            <li>{rightFourth}</li>
            <li>{rightFifth}</li>

          </ol>
        </div>
        <div>
          <h3>Wrong Answers are : </h3>
          <ol>
            <li>{wrongAns[0]}</li>
            <li>{wrongAns[1]}</li>
            <li>{wrongAns[2]}</li>
            <li>{wrongAns[3]}</li>
            <li>{wrongAns[4]}</li>

          </ol>
        </div>
        <div className="pie"></div>
    </div>
  );
};

export default Results;
