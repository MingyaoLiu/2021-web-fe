import React from 'react';
import logo from './logo.svg';
import './App.css';

export interface IUser {
  firstName: string;
  emailAddress: string;
}

class App extends React.Component {


  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>Foo to the barz</p>
      </div>
    );
  }
}

export default App;
