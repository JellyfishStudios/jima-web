import React from 'react';

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Hero from './hero.js';
import Specs from './specs.js';
import Footer from './footer.js';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        align: 'center',
        flexGrow: 1,
        alignItems: 'center'
    },
    gridItemMain: {
        width: '100%',
        alignContent: 'center'
    },
    gridItem: {
        width: '100%',
        alignContent: 'center'
    },
    gridItemAlternative: {
        backgroundColor: 'black',
        width: '100%',
        color: 'white'
    }
}));

export default function App() {
    const classes = useStyles();

    return(
        <Grid container className={classes.grid} >
            <Grid item xs={12} className={classes.gridItemMain} >    
                <Container>
                    <Hero />
                </Container>
            </Grid>
            <Grid item xs={12} className={classes.gridItemAlternative} >
                <Container>
                    <Specs />
                </Container>   
            </Grid>
            <Grid item xs={12} className={classes.gridItem}  > 
                <Container>  
                    <Footer /> 
                </Container>     
            </Grid>
        </Grid>
    );
}