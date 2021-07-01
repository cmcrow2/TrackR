import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

import EvalText from './EvalText.js';

const Evaluation = ({
  phoneScreensRate,
  interviewsRate,
  offers,
  appsSent,
  phoneScreens,
  interviews
}) => {

  return (
    <Grid item>
      <Box pl={6}>
        <Typography style={{ fontSize: 30 }}>
          <b>Evaluation:</b>
        </Typography>
        <br />
        <EvalText
          phoneScreensRate={phoneScreensRate}
          interviewsRate={interviewsRate}
          offers={offers}
          appsSent={appsSent}
          phoneScreens={phoneScreens}
          interviews={interviews}
        />
      </Box>
    </Grid>
  );
};

export default Evaluation;