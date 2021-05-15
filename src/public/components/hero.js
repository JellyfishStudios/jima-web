import React from 'react';

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HeroImage from '../../../images/CardanoJimaHero.png'
import { BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  headingCommentChar: {
    color: 'green'
  },
  keywords: {
    color: 'green',
    fontWeight: 'bold'
  },
  heroImage: {
    width: '292px',
    [theme.breakpoints.up('sm')]: {
      width: '592px',
    },
  },
  heroImageItem: {
    display: 'inline',
    justifyContent: 'flex-end'
  },
  grid: {
    maxWidth: '470px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '800px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '1080px',
    }
  }
}));

export default function Hero() {
    const classes = useStyles();

    return (
      <Grid container className={classes.grid}  >  
        <Grid item xs={12} >
          <div>
            <Typography variant="h1" >    
              {/* https://patorjk.com/ font: Modular */}
              <span className={classes.headingCommentChar}>#</span>   _______  _______  ______    ______   _______  __    _  _______  <br />
              <span className={classes.headingCommentChar}>#</span>  |       ||   _   ||    _ |  |      | |   _   ||  |  | ||       | <br />
              <span className={classes.headingCommentChar}>#</span>  |       ||  |_|  ||   | ||  |  _    ||  |_|  ||   |_| ||   _   | <br />
              <span className={classes.headingCommentChar}>#</span>  |       ||       ||   |_||_ | | |   ||       ||       ||  | |  | <br />
              <span className={classes.headingCommentChar}>#</span>  |      _||       ||    __  || |_|   ||       ||  _    ||  |_|  | <br />
              <span className={classes.headingCommentChar}>#</span>  |     |_ |   _   ||   |  | ||       ||   _   || | |   ||       | <br />
              <span className={classes.headingCommentChar}>#</span>  |_______||__| |__||___|  |_||______| |__| |__||_|  |__||_______| <br />
              <span className={classes.headingCommentChar}>#</span>                                      ___  ___   __   __  _______  <br />
              <span className={classes.headingCommentChar}>#</span>                                     |   ||   | |  |_|  ||   _   | <br />
              <span className={classes.headingCommentChar}>#</span>                                     |   ||   | |       ||  |_|  | <br />
              <span className={classes.headingCommentChar}>#</span>                                     |   ||   | |       ||       | <br />
              <span className={classes.headingCommentChar}>#</span>                                  ___|   ||   | |       ||       | <br />
              <span className={classes.headingCommentChar}>#</span>                                 |       ||   | | ||_|| ||   _   | <br />
              <span className={classes.headingCommentChar}>#</span>                                 |_______||___| |_|   |_||__| |__| <br />
              <span className={classes.headingCommentChar}>#</span>   
            </Typography>
            </div>
        </Grid>
        <Grid item xs={12} >
          <Grid container >
            <Grid item xs={4} >
              &nbsp;
            </Grid>
            <Grid item xs={8} >
              <Typography variant="h2" > 
                Secure and reliable Cardano stakepool hosted in Japan. Start staking your Cardano with us from the <b>4/July 2021</b> by by looking out for our ticker. 
              </Typography>
              <br />
              <Typography variant="h3" > 
                Ticker: <span className={classes.keywords}>JIMA</span> | 
                Pledge: <span className={classes.keywords}>10,000</span> | 
                Fee: <span className={classes.keywords}>2%</span> 
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid item xs={6} className={classes.heroImageItem}>
            <img src={HeroImage} alt="Cardano Jima" className={classes.heroImage} />
          </Grid>
        </Grid>
      </Grid>
    );
}