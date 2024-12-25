import './App.css';
import React from 'react';
import sad from './images/sad.png';
import happy from './images/happy.png';
class ToggleMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pic: happy };
    this.Toggle_Mode = this.Toggle_Mode.bind(this);
  }
  Toggle_Mode() {
    this.setState((prevState) => {
      if (prevState.pic === sad) {
        return { pic: happy };
      } else if (prevState.pic === happy) {
        return { pic: sad };
      }
    });
  }
  render() {
    return (
      <div>
        <h3>This is output of Task2: {this.state.pic === happy ? "Happy" : "Sad"}</h3>
        <button onClick={this.Toggle_Mode}>
          <img src={this.state.pic} alt="emoji" />
        </button>
      </div>
    );
  }
}
export default ToggleMode;