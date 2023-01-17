import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  console.log("i run all the time");
  const onChange = (event) => {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    console.log("i run only once.");
  }, []);

  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("Search For ", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("counter 변경시");
  }, [counter])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
