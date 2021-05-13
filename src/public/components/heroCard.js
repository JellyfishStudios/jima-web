import React from 'react';

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HeroImage from '../../../images/CardanoJimaHero.png'

const useStyles = makeStyles((theme) => ({
  headingCommentChar: {
    color: 'green'
  },
  intro: {
    fontSize: '1.25rem'
  },
  poolInfo: {
    fontSize: '1rem'
  }
}));

export default function HeroCard() {
    const classes = useStyles();

    return (
      <Grid container >  
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
        <Grid container >
          <Grid item xs={6} >
            <img src={HeroImage} alt="Cardano Jima" />
          </Grid>
          <Grid item xs={6} >
            <Typography variant="h2" > 
              Professional and secure Cardano stakepool hosted in Tokyo. Start staking your Cardano with us from <b>July 2021</b> by by looking out for our ticker. 
            </Typography>
            <br />
            <Typography variant="h3" > 
              Ticker: JIMA | Pledge: 10,000 | Fee: 2% 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
}