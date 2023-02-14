import React from 'react';
import './scss/Question.scss';
import './scss/SecondaryQuestion.scss';

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
