import React from 'react';
import { useTranslation } from "react-i18next";

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import i18next from 'i18next';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: '15px',
    alignItems: "center",
    justify: "center"
  }
}));

export default function Footer() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
      <Grid container className={classes.grid}>  
        <Grid item xs={12}>
          <p align='center'>
            <Button disabled>{t("footersection.copyright")}</Button> |&nbsp;
            <Button onClick={() => { i18n.changeLanguage(i18n.language == "en" ? "jp" : "en") }}>
              {t("footersection.languageswitch")}
            </Button>
          </p>
        </Grid>
      </Grid>
    );
}