import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Viewer, Entity } from 'resium';
import {Cartesian3} from "cesium";
import CameraControl from "./CameraControl";
import {CameraProps} from '../interfaces/Interfaces';

export default function Dashboard() {
  const [state, setState] = React.useState({
    yaw: 0,
    pitch: 90,
    roll: 0
  });

  function callback(newVal:number) {
    state.yaw = newVal;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Viewer full>
          <div style={{ position: "absolute", top: 0, left: 0 }}>
          <CameraControl yaw = {245} />
          </div>
          <Entity
            name="test"
            description="{description}"
            position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
            point={{ pixelSize: 10 }}
          />
        </Viewer>
      </Grid>
    </Grid>
  );
}
