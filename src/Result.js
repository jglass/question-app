import React from 'react';
import './Question.css';


const Result = (props) => {
  return(
      <li>
        <iframe style={{ borderRadius: "12px" }} src={`https://open.spotify.com/embed/track/${props.trackId}`} width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </li>
  );
}

export default Result;
