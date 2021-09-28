import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ id: "111", content: "cocococo" });

  useEffect(() => {
    fetch("http://localhost:8080/greeting?name=홍길동")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        // data = res;
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        id = {data.id}
        <br />
        content = {data.content}
      </header>
    </div>
  );
}

export default App;
