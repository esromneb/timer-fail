import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display_count: 0
      ,count:0
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

    // console.log('A: ' + s.count);

    this.setState({
      count: s.count+1
    });
    // console.log('B: ' + s.count);

    if( this.isMacroUpdate(s) ) {
      this.setState({
        display_count: s.count
      });
    } else {
      if( !this.cachedId ) {
        this.cachedId = document.getElementById('fastCount');
      }
    }




    // this.setState({
    //   display_count: s.display_count+1
    // });
  }

  isMacroUpdate(s) {
    if((s.count % 10) === 0) {
      return true;
    }
    return false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if( this.isMacroUpdate(nextState) ) {
      return true;
    }
    return false;
  }

  render() {
    console.log(this.props);
    let s = this.state;
    return (
      <div>
        <h1><div id="fastCount">{s.display_count}</div></h1>
        <button onClick={this.handleStop}>Stop Counter</button><br/>
      </div>
    );
  }
}

export default App;
