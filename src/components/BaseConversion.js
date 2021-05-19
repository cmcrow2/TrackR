import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const BaseConversion = () => {

  return (
    <Grid item xs={5}>
      <Typography style={{ fontSize: 30 }}>
        <b>Base Conversion Rates:</b>
      </Typography>
      <br />
      <Typography style={{ fontSize: 22 }}>
        100 Applications Sent
      </Typography>
      <Typography style={{ fontSize: 22 }}>
        20 Phone Screens (20%)
                    </Typography>
      <Typography style={{ fontSize: 22 }}>
        10 In-Person Interviews (50%)
      </Typography>
      <Typography style={{ fontSize: 22 }}>
        2 Offers (20%)
      </Typography>
    </Grid>
  );
};

export default BaseConversion;