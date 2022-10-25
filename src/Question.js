import React from 'react';
import './Question.css';


function Question(props) {
  return(
    <a href="#"
      onClick={() => { props.onChange(props.question) } }
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
