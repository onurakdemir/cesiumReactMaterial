import React from "react";
import '../../style/skeleton.css';
import '../../style/main.css';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yaw: 30,
      pitch: 30,
      roll: 30
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
      <Typography color="textSecondary">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h4>Yaw  :</h4>
          <TextField
              name="yaw"
              type="number"
              value={this.state.yaw}
              onChange={this.handleInputChange}
              fullWidth
            />
          </label>
          <label>
            <h4>Pitch:</h4>
          <TextField
              name="pitch"
              type="number"
              value={this.state.pitch}
              onChange={this.handleInputChange}
              fullWidth
            />
          </label>
          <label>
            <h4>Roll :</h4>
          <TextField
              name="roll"
              type="number"
              value={this.state.roll}
              onChange={this.handleInputChange}
              fullWidth
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Typography>
    );
  }
}