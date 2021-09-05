// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import MainItem from './component/MainItem';
import dummy from "./db/data.json";
import { useState } from 'react';

function App() {
  const sidx = new Array();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <p>
                <h1>Welcome to Umborrow</h1>
                <Link className="App-link" to="/main">Join</Link>
              </p>
            </header>
          </div>
        </Route>
        <Route path="/main">
          <div className="App">
            <header className="App-header">
            <div className="main-grid">
              { dummy.map( data => (
                  <div key={data.idx} onClick={()=>{
                    if(sidx.indexOf(data.idx)<1)
                      sidx.push(data.idx);
                    else
                      sidx.pop(data.idx);
                    console.log(sidx);
                  }}>
                  <MainItem cls="main-item" 
                          name={data.name} 
                          idx={data.idx}
                          />
                  </div>
              ))}
            </div>
              <div>
                {sidx}
                <div className="main-item">대여</div>
              </div>
            </header>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
