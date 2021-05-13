import React from 'react';

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
}));

export default function Footer() {
    const classes = useStyles();

    return (
      <Grid container alignItems="center" justify="center">  
        <Grid item xs={12} textAlign= 'center'>
          <p align='center'>© CARDANOJIMA.IO</p>
        </Grid>
      </Grid>
    );
}