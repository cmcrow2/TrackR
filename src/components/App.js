import React, { useEffect, useState } from "react";
import { Grid, Typography, RadioGroup, Radio } from '@material-ui/core';
import RadioForm from './RadioForm.js';

const App = () => {

  return (
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        <Typography style={{fontSize: 18}}>
          <b>How far did you make it through the interview process?</b>
        </Typography>
        <p>{'\n'}</p>
        <RadioForm />
      </Grid>
      <Grid item xs={6}>
        <Typography style={{fontSize: 18}}>
          <b>Base Conversion Rates:</b>
        </Typography>
        <p>{'\n'}</p>
        <Typography>
          100 Applications Sent
        </Typography>
        <Typography>
          20 Phone Screens (20%)
        </Typography>
        <Typography>
          10 In-Person Interviews (50%)
        </Typography>
        <Typography>
          2 Offers (20%)
        </Typography>
        <p>{'\n'}</p>
        <Typography style={{fontSize: 18}}>
          <b>Your conversion rates:</b>
        </Typography>
        <p>{'\n'}</p>
        <Typography>
          100 Applications Sent
        </Typography>
        <Typography>
          20 Phone Screens (20%)
        </Typography>
        <Typography>
          10 In-Person Interviews (50%)
        </Typography>
        <Typography>
          2 Offers (20%)
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default App;