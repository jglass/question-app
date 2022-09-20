import React from 'react';
import './Question.css';


function Question(props) {
  return(
    <a href="#" onClick={() => { props.onChange(props.question) } } >
      <li>
        <figure>
          <img src={props.imageUrl}
               value={props.question} />
          <figcaption>{props.question}</figcaption>
        </figure>
      </li>
    </a>
  );
}

export default Question;
