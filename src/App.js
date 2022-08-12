import './App.css';

function App() {
  return (
    <div>
      <div>
        <label>
          <input type="radio"
            value="A"
            name="question"
          />
         Question A
        </label>
      </div>
      <div>
        <label>
          <input type="radio"
            value="B"
            name="question"
          />
         Question B
        </label>
      </div>
      <div>
        <label>
          <input type="radio"
            value="C"
            name="question"
          />
         Question C
        </label>
      </div>
    </div>
  );
}

export default App;
