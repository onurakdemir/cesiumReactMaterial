import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Viewer } from 'resium';
import Toolbar from './ToolBar';

export default function Dashboard() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Viewer full>
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <Toolbar />
          </div>
        </Viewer>
      </Grid>
    </Grid>
  );
}
