import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Viewer, Entity } from 'resium';
import { Cartesian3 } from "cesium";
import CameraControl from "./CameraControl";
import ContentForm from "./ContentForm";
//import { CameraProps } from '../interfaces/Interfaces';

export default function Dashboard() {
  const [state, setState] = useState({
    yaw: 0,
    pitch: 90,
    roll: 0
  });

  function callback() {
    setState({
      yaw: 30,
      pitch: 60,
      roll:45
    });
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Viewer full>
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <CameraControl yaw={245} update={callback} />
            {/* <ContentForm /> */}
          </div>
          <Entity
            name="test"
            description={state.yaw}
            position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
            point={{ pixelSize: 10 }}
          />
        </Viewer>
      </Grid>
    </Grid>
  );
}
