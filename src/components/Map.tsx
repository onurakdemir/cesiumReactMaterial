import React, { useState } from 'react';
// import Grid from '@material-ui/core/Grid';
import { Viewer, Entity, CameraFlyTo } from 'resium';
import { Cartesian3 } from "cesium";
// import CameraControl from "./CameraControl";
// import ContentForm from "./ContentForm";
// import { CameraProps } from '../interfaces/Interfaces';
import Basic from './InputForm/basic';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Dashboard() {
  const [state, setState] = useState({
    yaw: 139,
    pitch: 35,
    roll: 100
  });

  function callback(yawx: number, pitchx: number, rollx: number) {
    setState({
      yaw: yawx,
      pitch: pitchx,
      roll: rollx
    });
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript
        </Typography>
        <Viewer full>
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <Basic update={callback} />
            {/* <CameraControl yaw={245} update={callback} /> */}
            {/* <InputForm /> */}
            {/* <ContentForm /> */}
          </div>
          <Entity
            name="test"
            description={"Yaw :" + state.yaw + " Pitch:" + state.pitch + " Roll:" + state.roll}
            position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
            point={{ pixelSize: 10 }}
          />

          <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(state.yaw, state.pitch, state.roll)} />
        </Viewer>
        {/* <ProTip />
        <Copyright /> */}
      </Box>
    </Container>

    // <Grid container>
    //   <Grid item xs={12}>
    //     <Viewer full>
    //       <div style={{ position: "absolute", top: 0, left: 0 }}>
    //         <Basic update={callback} />
    //         {/* <CameraControl yaw={245} update={callback} /> */}
    //         {/* <InputForm /> */}
    //         {/* <ContentForm /> */}
    //       </div>
    //       <Entity
    //         name="test"
    //         description={"Yaw :" + state.yaw + " Pitch:" + state.pitch + " Roll:" + state.roll}
    //         position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
    //         point={{ pixelSize: 10 }}
    //       />

    //       <CameraFlyTo duration={5} destination={Cartesian3.fromDegrees(state.yaw, state.pitch, state.roll)} />
    //     </Viewer>
    //   </Grid>
    // </Grid>
  );
}
