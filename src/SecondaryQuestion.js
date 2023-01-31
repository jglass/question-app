import React from 'react';
import './Question.css';
import './SecondaryQuestion.css';

const SecondaryQuestion = (props) => {
  return(
    <a href="#"
      onClick={() => { props.onChange(props.answerValue) } }
      data-testid={props.testId}
      value={props.answerValue} >
      <button>
        <li>
          {props.answerText}
        </li>
      </button>
    </a>
  );
}

export default SecondaryQuestion;
