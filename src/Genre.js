import React from 'react';
import './Question.css';

function Genre(props) {
  function onChange(value) {
    const choice = questionsValue.find(q => q.questionText === value);

    setAnswersValue(nextChoices);
    setQuestionsValue(nextChoices);
    setSelectedValue(value);
  }

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
        <iframe width="100%" height="380" title="Spotify Embed: Signal" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" src={`https://open.spotify.com/embed/artist/${props.playerHTML}?utm_source=oembed`}></iframe>
      </li>
    </a>
  );
}

export default Genre;
