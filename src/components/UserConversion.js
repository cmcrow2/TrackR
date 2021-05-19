import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const UserConversion = ({
  currentUser,
  appsSent, phoneScreens, interviews, offers,
  phoneScreensRate, interviewsRate, offersRate
}) => {

  let phoneScreensColor = 'limegreen';
  let interviewsColor = 'limegreen';
  let offersColor = 'limegreen';

  if (phoneScreensRate < 20) { phoneScreensColor = 'red'; }
  if (interviewsRate < 50) { interviewsColor = 'red'; }
  if (offers < 1) { offersColor = 'red'; }

  return (
    <Grid item xs={5}>
      <Typography style={{ fontSize: 30 }}>
        <b>{`User ${currentUser}'s Rates:`}</b>
      </Typography>
      <br />
      <Typography style={{ fontSize: 22 }}>
        {`${appsSent} Applications Sent`}
      </Typography>
      <Grid container direction="row">
        <Grid item>
          <Typography style={{ fontSize: 22 }}>
            {`${phoneScreens} Phone Screens (`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 22, color: phoneScreensColor}}>
            {`${phoneScreensRate}%`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 22 }}>
            {`)`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item>
          <Typography style={{ fontSize: 22 }}>
            {`${interviews} Interviews (`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 22, color: interviewsColor}}>
            {`${interviewsRate}%`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 22 }}>
            {`)`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item>
          <Typography style={{ fontSize: 22 }}>
            {`${offers} Offers (`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 22, color: offersColor}}>
            {`${offersRate}%`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 22 }}>
            {`)`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserConversion;