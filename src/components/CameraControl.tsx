import React from 'react';
import '../style/skeleton.css';
import '../style/main.css';
import { CameraProps } from '../interfaces/Interfaces';
import { Button } from '@material-ui/core';

const CameraControl: React.SFC<CameraProps> = (props) => {
  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={props.update}>
        Contact us!
      </Button>
      <h1>Hello, {props.yaw}</h1>
    </React.Fragment>
  );
}

export default CameraControl;