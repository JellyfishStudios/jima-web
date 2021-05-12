import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Clicker (props) {
    const [count, setCount] = useState(props.initialCount);

    return(
        <Grid container spacing={1}>
            <Button variant="contained" color="primary" onClick={() => {
                setCount(count + 1);
            }}>
               {count}
            </Button>
        </Grid>
    );
}
