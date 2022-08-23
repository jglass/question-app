function Question(props) {
  return(
    <div>
      <img src={props.imageUrl} />  
      <label>
        <input type="radio"
          value={props.question}
          name="question"
          onClick={props.onChange}
        />
       {props.question}
      </label>
    </div>
  );
}

export default Question;
