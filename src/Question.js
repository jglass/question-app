function Question(props) {
  return(
    <a href="#" onClick={() => { props.onChange(props.question) } } >
      <li>
        <img src={props.imageUrl}
             height="125"
             width="125"
             value={props.question} />
        <label>
         {props.question}
        </label>
      </li>
    </a>
  );
}

export default Question;
