import React from "react";
import '../../style/skeleton.css';
import '../../style/main.css';

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yaw: 30,
      pitch: 30,
      roll:30
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.update(this.state.yaw, this.state.pitch, this.state.roll);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Yaw  :
          <input
            name="yaw"
            type="number"
            value={this.state.yaw}
            onChange={this.handleInputChange}
            />
        </label>
        <label>
          Pitch:
          <input
            name="pitch"
            type="number"
            value={this.state.pitch}
            onChange={this.handleInputChange} 
            />
        </label>
        <br />
        <label>
          Roll :
          <input
            name="roll"
            type="number"
            value={this.state.roll}
            onChange={this.handleInputChange} 
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}