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
        {props.trackId &&
          <iframe style={{ borderRadius: "12px" }} src={`https://open.spotify.com/embed/track/${props.trackId}`} width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        }
      </li>
    </a>
  );
}

export default Question;
