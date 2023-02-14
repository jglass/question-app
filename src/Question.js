import React from 'react';
import './scss/Question.scss';

const Question = (props) => {
  return(
    <a href="#"
      onClick={() => { props.onClick(props.question) } }
      data-testid={props.testId}
      value={props.question}
      data-genre={props.genre}
      data-artists={props.artists}
      data-tracks={props.tracks} >
      <li>
        <figure>
          <img src={props.imageUrl}
               alt={props.question} />
          <figcaption>{props.question}</figcaption>
        </figure>
      </li>
    </a>
  );
}

export default Question;
