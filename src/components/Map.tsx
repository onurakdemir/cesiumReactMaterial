import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Viewer, Entity } from 'resium';
import Toolbar from './ToolBar';
import {Cartesian3} from "cesium";

export default function Dashboard() {

  const [description, setDescription] = useState("onurcuk");

  function callback(newVal:string) {
    setDescription(newVal);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Viewer full>
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <Toolbar parentCallback={callback}/>
          </div>
          <Entity
            name="test"
            description={description}
            position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
            point={{ pixelSize: 10 }}
          />
        </Viewer>
      </Grid>
    </Grid>
  );
}
