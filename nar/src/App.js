import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([{ grade: "111", cls: "cocococo" }]);

  useEffect(() => {
    fetch("http://localhost:8080/getgrade")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {data.map((d) => {
            return (
              <div>
                {d.grade} 학년 {d.cls} 반
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
