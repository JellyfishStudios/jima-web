import React from 'react';
import { useTranslation } from "react-i18next";

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: '50px'
  }
}));

export default function Hero() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
      <Grid container className={classes.grid} >
        <Grid item xs={12} sm={4} >
          <ul>
            <p align="left"><b>{t("specssection.network.header")}:</b></p>
            <li>{t("specssection.network.a")}</li>
            <li>{t("specssection.network.b")}</li>
            <li>{t("specssection.network.c")}</li>
            <li>{t("specssection.network.d")}</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} >
          <ul>
            <p align="left"><b>{t("specssection.producer.header")}:</b></p>
            <li>{t("specssection.producer.a")}</li>
            <li>{t("specssection.producer.b")}</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} >
          <ul>
            <p align="left"><b>{t("specssection.relay.header")}:</b></p>
            <li>{t("specssection.relay.a")}</li>
            <li>{t("specssection.relay.b")}</li>
            <li>{t("specssection.relay.c")}</li>
          </ul>
        </Grid>
      </Grid>
    );
}