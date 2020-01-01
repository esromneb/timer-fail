import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.handleStop = this.handleStop.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleStop(e) {
    clearInterval(this.timerID);
  }

  tick() {
    const s = this.state;
    this.setState({
      count: s.count+1
    });
  }

  render() {
    let s = this.state;
    return (
      <div>
        <h1>{s.count}</h1>
        <button onClick={this.handleStop}>Stop Counter</button><br/>
      </div>
    );
  }
}

export default App;
