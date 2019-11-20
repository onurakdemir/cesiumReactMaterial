import React from 'react';
import '../style/skeleton.css';
import '../style/main.css';
import { CameraProps } from '../src/interfaces/Interfaces';
import { Button } from '@material-ui/core';

const CameraControl: React.SFC<CameraProps> = (props) => {
  function callback() {
    props.update();
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={callback}>
        Contact us!
      </Button>
      <h1>Hello, {props.yaw}</h1>
    </React.Fragment>
  );
}

export default CameraControl;