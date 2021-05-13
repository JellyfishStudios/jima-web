import React from 'react';

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
}));

export default function HeroCard() {
    const classes = useStyles();

    return (
      <Grid container >  
        <Grid item xs={12} >
          Contact us
        </Grid>
      </Grid>
    );
}