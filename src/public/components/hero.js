import React from 'react';
import { useTranslation } from "react-i18next";

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HeroImage from '../images/CardanoJimaHero.png';

const useStyles = makeStyles((theme) => ({
  headingCommentChar: {
    color: 'white'
  },
  asciiContainer: {
    fontFamily: 'monospace',
    whiteSpace: 'pre'
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
    alignContent: 'center',
    alignItems: 'center',
    maxWidth: '470px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '800px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '1080px',
    }
  },
  gridItem: {
    alignContent: 'center'
  }
}));

export default function Hero() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
      <Grid container className={classes.grid}>  
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant='h1' align='center'>
              {/* https://patorjk.com/ font: Modular */}
              <span className={classes.asciiContainer}> _______  _______  ______    ______   _______  __    _  _______ </span><br />
              <span className={classes.asciiContainer}>|       ||   _   ||    _ |  |      | |   _   ||  |  | ||       |</span><br />
              <span className={classes.asciiContainer}>|       ||  |_|  ||   | ||  |  _    ||  |_|  ||   |_| ||   _   |</span><br />
              <span className={classes.asciiContainer}>|       ||       ||   |_||_ | | |   ||       ||       ||  | |  |</span><br />
              <span className={classes.asciiContainer}>|      _||       ||    __  || |_|   ||       ||  _    ||  |_|  |</span><br />
              <span className={classes.asciiContainer}>|     |_ |   _   ||   |  | ||       ||   _   || | |   ||       |</span><br />
              <span className={classes.asciiContainer}>|_______||__| |__||___|  |_||______| |__| |__||_|  |__||_______|</span><br />
              <span className={classes.asciiContainer}>                                    ___  ___   __   __  _______ </span><br />
              <span className={classes.asciiContainer}>                                   |   ||   | |  |_|  ||   _   |</span><br />
              <span className={classes.asciiContainer}>                                   |   ||   | |       ||  |_|  |</span><br />
              <span className={classes.asciiContainer}>                                   |   ||   | |       ||       |</span><br />
              <span className={classes.asciiContainer}>                                ___|   ||   | |       ||       |</span><br />
              <span className={classes.asciiContainer}>                               |       ||   | | ||_|| ||   _   |</span><br />
              <span className={classes.asciiContainer}>                               |_______||___| |_|   |_||__| |__|</span><br />
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Grid item xs={6} className={classes.heroImageItem}>
            <img src={HeroImage} alt={t("herosection..heroimage")} className={classes.heroImage} />
          </Grid>
        </Grid>
      </Grid>
    );
}