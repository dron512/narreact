import "./App.css";
import InputText from "./components/InputText";
import Button from "react-bootstrap/Button";

function addmember() {
  fetch("http://localhost:5000/member/", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      idx: 4,
      id: "bb@naver.com",
      name: "홍기롣ㅇ",
      password: "1234",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>부트스트랩</Button>
        <button onClick={addmember}>member추가</button>
        <InputText />
      </header>
    </div>
  );
}

export default App;
