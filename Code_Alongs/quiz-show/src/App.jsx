import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/trivia";
import Timer from "./components/timer";
import Start from "./components/start";
import { data } from "./data";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$0");

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$100" },
        { id: 2, amount: "$200" },
        { id: 3, amount: "$300" },
        { id: 4, amount: "$500" },
        { id: 5, amount: "$1000" },
        { id: 6, amount: "$2000" },
        { id: 7, amount: "$4000" },
        { id: 8, amount: "$8000" },
        { id: 9, amount: "$16000" },
        { id: 10, amount: "$32000" },
        { id: 11, amount: "$64000" },
        { id: 12, amount: "$125000" },
        { id: 13, amount: "$250000" },
        { id: 14, amount: "$500000" },
        { id: 15, amount: "$1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((money) => money.id === questionNumber - 1).amount
      );
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      <>
        {!username ? (
          <Start setUsername={setUsername} />
        ) : (
          <>
            <div className="main">
              {stop ? (
                <h1 className="endText">You earned: {earned} </h1>
              ) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer
                        setStop={setStop}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="pyramid">
              <ul className="moneyList">
                {moneyPyramid.map((item) => (
                  <li
                    className={
                      questionNumber === item.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                    key={item.id}
                  >
                    <span className="moneyListItemNumber">{item.id}</span>
                    <span className="moneyListItemAmount">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </>
    </div>
  );
}
export default App;
