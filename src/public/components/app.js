import React from 'react';

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import Clicker from './clicker.js';

const useStyles = makeStyles((theme) => ({
    grid: {
      width: 100
    }
}));

export default function App() {
    const classes = useStyles();

    return(
        <Grid container className={classes.grid} spacing={1} >
            <Grid item xs={12} >    
                <Clicker initialCount={10} />
            </Grid>
            <Grid item xs={12}>    
                <Clicker initialCount={10} />
            </Grid>
        </Grid>
    );
}