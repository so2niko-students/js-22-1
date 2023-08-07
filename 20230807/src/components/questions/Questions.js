import './style.css';
import { useState } from 'react';

const Questions = ({ list }) => {
  const [answers, setAnswers] = useState({});

  const handleClick = (qID, aID) => {
    const newAnswers = { ...answers };
    newAnswers[qID] = aID;
    console.log(newAnswers);
    setAnswers(newAnswers);
  }

  const onFinishQuiz = () => {
    const points = Object.entries(answers).reduce((acc, [key, val]) => {
      console.log(key, val);
      const question = list.find(el => el.question_id == key);
      const answer = question.options.find(el => el.id == val);
      return acc + answer.is_correct ? 1 : 0;
    }, 0);
    console.log('points', points);
  }

  const is10Answers = Object.entries(answers).length === 10;

  return (
    <div className={`questions ${is10Answers ? 'bg-color-finish' : 'bg-color-continue'}`}>
      {
        list.map((q) => (
          <div className='question' key={q.question_id}>
            <p>{q.question_text}</p>
            <div className='answers'>
              {q.options.map((o) => <button key={o.id} onClick={() => handleClick(q.question_id, o.id)}>{o.text}</button>)}
            </div>
          </div>
        ))
      }
      {is10Answers && (
        <div>
          <button onClick={onFinishQuiz}>Завершити</button>
        </div>
      )
      }
    </div>
  )
}

export default Questions;