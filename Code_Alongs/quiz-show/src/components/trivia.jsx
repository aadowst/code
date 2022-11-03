import { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../assets/right.mp3"
import wrong from "../assets/wrong.mp3"

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
	

	const [correctAnswer] = useSound(correct)
	const [wrongAnswer] = useSound(wrong)

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(answer.correct ? " answer correct" : "answer wrong")
    );
    delay(5000, () =>
      {
				if(answer.correct){
					correctAnswer();
					delay(1000, ()=> {
						setQuestionNumber(prev => prev + 1)
						setSelectedAnswer(null)
					})
				} else {
					wrongAnswer();
					delay(1000, ()=> {
						setSelectedAnswer(null)
					})
					setStop(true)
				}
			}
    );
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            className={selectedAnswer === answer ? className : "answer"}
            onClick={() => handleClick(answer)}
            key={answer.text}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}
