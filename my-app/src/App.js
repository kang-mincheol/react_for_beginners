import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    console.log("refresh");
  }, []);

  useEffect(() => {
    console.log("keyword 변경시");
  }, [keyword]);

  useEffect(() => {
    console.log("counter 변경시");
  }, [counter])

  useEffect(() => {
    console.log("counter, keyword 변경시");
  }, [counter, keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
