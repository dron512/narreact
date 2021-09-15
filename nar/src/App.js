import "./App.css";
import BoardList from "./components/BoardList";
// import mydata from "./db/mydata.json";

function App() {
  // fetch(url).then{}
  // html , css , javascript
  return (
    <div className="App">
      <header className="App-header">
        <BoardList />
        {/* <div className="adiv">
          <a className="App-link" href="http://www.naver.com">
            naver
          </a>
        </div>
        <div className="bdiv">
          <table border="1">
            <thead>
              <tr>
                <th>No</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>작성일자</th>
              </tr>
            </thead>
            <tbody>
              {mydata.board.map((data) => (
                <tr>
                  <td>{data.idx}</td>
                  <td>{data.name}</td>
                  <td>{data.title}</td>
                  <td>{data.wdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </header>
    </div>
  );
}

export default App;
