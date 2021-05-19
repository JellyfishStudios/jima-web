import React from 'react';
import { useTranslation } from "react-i18next";

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HeroImage from '../images/CardanoJimaHero.png';

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
    const { t } = useTranslation();

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
          <Grid item xs={6} className={classes.heroImageItem}>
            <img src={HeroImage} alt={t("herosection..heroimage")} className={classes.heroImage} />
          </Grid>
        </Grid>
      </Grid>
    );
}