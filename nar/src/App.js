import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [sel, setSel] = useState({ grade: 1, cls: 1 });
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/getstudent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       grade: 1,
  //       cls: 1,
  //     }),
  //   })
  //     .then((result) => {
  //       return result.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  function getMembers(grade, cls) {
    console.log("grade = " + grade + " cls = " + cls);
    fetch("http://localhost:8080/getstudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grade: grade,
        cls: cls,
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div>
            <Button
              variant="primary m-3"
              ban="1"
              onClick={() => {
                setSel({ grade: 1, cls: sel.cls });
              }}
            >
              1학년
            </Button>
            <Button
              variant="primary m-3"
              onClick={() => {
                setSel({ grade: 2, cls: sel.cls });
              }}
            >
              2학년
            </Button>
            <Button
              variant="primary m-3"
              onClick={() => {
                setSel({ grade: 3, cls: sel.cls });
              }}
            >
              3학년
            </Button>
          </div>
          <div>
            <Button
              variant="primary m-3"
              ban="1"
              onClick={() => {
                setSel({ grade: sel.grade, cls: 1 });
                getMembers(sel.grade, 1);
              }}
            >
              1반
            </Button>
            <Button
              variant="primary m-3"
              onClick={() => {
                setSel({ grade: sel.grade, cls: 2 });
                getMembers(sel.grade, 2);
              }}
            >
              2반
            </Button>
            <Button
              variant="primary m-3"
              onClick={() => {
                setSel({ grade: sel.grade, cls: 3 });
                getMembers(sel.grade, 3);
              }}
            >
              3반
            </Button>
          </div>
          <div>
            grade = {sel.grade} cls = {sel.cls}
            <br />
            {data.length === 0 && <span>Loading...</span>}
            <br />
            {data.map((d) => {
              return <Button key={d.student_id}>{d.name}</Button>;
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
