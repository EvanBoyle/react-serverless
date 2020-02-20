import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={}
  }
  render() {
    const { response } = this.state
    const apiMessage = response || "waiting ..."
    return (
      <div className="App">
        <header className="App-header">
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
          <p>
            /api/hello response = {apiMessage}
          </p>
        </header>
      </div>
    );
  }

  componentDidMount() {
    fetch((process.env.REACT_APP_ENDPOINT || window.location.href)+"/api/hello")
      .then(v => v.json())
      .then(v => {
        this.setState({ response: v.response })
      })
  }
}

export default App;
