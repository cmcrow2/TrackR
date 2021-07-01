import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

const PhoneEval = ({ phoneScreensNeeded }) => {
  return (
    <div>
      <Typography style={{ fontSize: 22 }}>
        You are having some difficulty receiving phone screenings from the companies you applied to. You should look over your resume again and see what you could change to make it better.
      </Typography>
      <Typography style={{ fontSize: 22 }}>
        {`You need to send ${phoneScreensNeeded} more application(s) and receive the same number of phone screenings to reach the target rate.`}
      </Typography>
    </div>
  );
};

export default PhoneEval;