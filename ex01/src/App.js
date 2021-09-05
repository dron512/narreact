import './App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import Main from "./component/Main"
import Ban from "./component/Ban"
import Test from './component/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <h1>
                Welcome to umborrow
              </h1>
              <Link to="/start">START</Link>
            </Route>
            <Route path="/start">
              <h1>
                CHOOSE YOUR CLASS
              </h1>
              <Main></Main>
            </Route>
            <Route path="/ban">
              <h1>
                CHOOSE YOUR NAME
              </h1>
              <Ban></Ban>
            </Route>
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
