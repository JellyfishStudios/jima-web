import React from 'react';

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: '50px'
  }
}));

export default function Hero() {
    const classes = useStyles();

    return (
      <Grid container className={classes.grid} >
        <Grid item xs={12} sm={4} >
          <ul>
            <p align="left"><b>Network & Security</b></p>
            <li>AWS (Japan) hosted for 24x7 reliability</li>
            <li>All nodes secured behind a private VPC</li>
            <li>Only Relay nodes accessible from the internet</li>
            <li>Block Producer inacessible outside of the VPC</li>
            <li>All keys in offline cold storage</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} >
          <ul>
            <p align="left"><b>Block Producer Node</b></p>
            <li>AWS Linux</li>
            <li>T3.Large | 2 vCPUs | 8 GB | 256 GB SSD</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} >
          <ul>
            <p align="left"><b>Relay Nodes</b></p>
            <li>AWS Linux</li>
            <li>T3.Medium | 2 vCPUs | 4 GB | 256 GB SSD</li>
            <li>1-2 nodes</li>
          </ul>
        </Grid>
      </Grid>
    );
}