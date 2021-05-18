import React from 'react';
import { useTranslation } from "react-i18next";

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: '15px',
    alignItems: "center",
    justify: "center"
  }
}));

export default function Footer() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
      <Grid container className={classes.grid}>  
        <Grid item xs={12} textAlign= 'center'>
          <p align='center'>{t("footersection.copyright")}</p>
        </Grid>
      </Grid>
    );
}