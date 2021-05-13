import React from 'react';

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import HeroCard from './heroCard.js';
import SpecificationCard from './specsCard.js';
import ContactCard from './contactCard.js';
import Footer from './footer.js';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        align: 'center',
        flexGrow: 1,
        alignItems: 'center'
    },
    gridItem: {
        width: '100%',
        alignContent: 'center'
    },
    gridItemAlternative: {
        backgroundColor: 'black',
        width: '100%',
        color: 'white',
        alignContent: 'center'
    }
}));

export default function App() {
    const classes = useStyles();

    return(
        <Grid container className={classes.grid} >
            <Grid item xs={12} className={classes.gridItem} >    
                <Container>
                    <HeroCard />
                </Container>
            </Grid>
            <Grid item xs={12} className={classes.gridItemAlternative} >
                <Container>
                    <SpecificationCard />
                </Container>   
            </Grid>
            <Grid item xs={12} className={classes.gridItem}  > 
                <Container>
                    <ContactCard />   
                    <Footer /> 
                </Container>     
            </Grid>
        </Grid>
    );
}