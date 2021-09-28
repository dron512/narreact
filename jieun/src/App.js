import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MyProfile from "./components/MyProfile";
import Tail from "./components/Tail";

const iam = {
  lastName: "Jang",
  firstName: "Jieun",
  koName: "박명회",
};
function App() {
  let [제목, 제목변경] = useState(["코트추천", "커피맛집"]);
  function 제목바꾸기() {
    var newArray = [...제목];
    newArray[0] = "여자 코트 추천";
    제목변경(newArray);
  }
  return (
    <div className="App">
      <Header />
      <MyProfile iam={iam} />
      <div>{제목[0]}</div>
      <div>{제목[1]}</div>
      <button onClick={제목바꾸기}>burron</button>

      <Modal></Modal>
      <Tail iam={iam} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
  function Modal() {
    return (
      <div>
        <h2>제목</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>
    );
  }
}

export default App;
