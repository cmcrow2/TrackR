import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const UserConversion = ({
  appsSent, phoneScreens, interviews, offers,
  phoneScreensRate, interviewsRate, offersRate
}) => {

  return (
    <Grid item xs={5}>
      <Typography style={{ fontSize: 30 }}>
        <b>Your Conversion Rates:</b>
      </Typography>
      <br />
      <Typography style={{ fontSize: 22 }}>
        {`${appsSent} Applications Sent`}
      </Typography>
      <Typography style={{ fontSize: 22 }}>
        {`${phoneScreens} Phone Screens (${phoneScreensRate}%)`}
      </Typography>
      <Typography style={{ fontSize: 22 }}>
        {`${interviews} In-Person Interviews (${interviewsRate}%)`}
      </Typography>
      <Typography style={{ fontSize: 22 }}>
        {`${offers} Offers (${offersRate}%)`}
      </Typography>
    </Grid>
  );
}

export default UserConversion;