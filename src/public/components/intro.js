import React from 'react';
import { useTranslation } from "react-i18next";

import { makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    keywords: {
        color: 'yellow',
        fontWeight: 'bold'
    },
    grid: {
        padding: '75px'
    }
}));

export default function Hero() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
      <Grid container className={classes.grid}>  
        <Grid item xs={12} >
            <Typography variant="h2" > 
                {t("herosection.intro.copy", { launch: t("herosection.intro.launch")})}
            </Typography>
            <br />
            <Typography variant="h3" > 
                {t("herosection.poolinfo.tickerlabel")}: <span className={classes.keywords}>{t("herosection.poolinfo.ticker")}</span> |&nbsp;
                {t("herosection.poolinfo.pledgelabel")}: <span className={classes.keywords}>{t("herosection.poolinfo.pledge")}</span> |&nbsp; 
                {t("herosection.poolinfo.feelabel")}: <span className={classes.keywords}>{t("herosection.poolinfo.fee")}</span> 
            </Typography>
        </Grid>
      </Grid>
    );
}