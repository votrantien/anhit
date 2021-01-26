import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function One(){
  return (
    <div>
      <h2>h2</h2>
      <h3>h3</h3>
      Cách số 1
    </div>
    );
}

var Two = function(){
  return (
    <div>
      cách 2
    </div>
  );
}

var Three = ()=>(
  <div>Cách số 3</div>
);

class Four extends Component {
  render() {
    return (
      <div>
        Cách 4
      </div>
    );
  }
}

// ssuwr dụng props cách 1

function PropsCach1(props){
  return (
    <div>
      {props.tieude}
    </div>
  );
}

// sử dụng props cách 2

class PropsCach2 extends Component {
  render() {
    return (
      <div>
        {this.props.tieude}
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <One></One>
        <Two></Two>
        <Three></Three>
        <Four></Four>
        <PropsCach1 tieude="tiêu đề 1"/>
        <PropsCach1 tieude="tiêu đề 2"/>
        <PropsCach1 tieude="tiêu đề 3"/>
        <hr/>
        <PropsCach2 tieude="tiêu đề 4"/>
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
      </header>
    </div>
  );
}

export default App;
