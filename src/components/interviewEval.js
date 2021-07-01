import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

const InterviewEval = ({ interviewsNeeded }) => {
  return (
    <div>
      <Typography style={{ fontSize: 22 }}>
        You are having some difficulty receiving interviews from the companies you applied to. You should practice and improve your personal narrative.
      </Typography>
      <Typography style={{ fontSize: 22 }}>
        {`You need to send ${interviewsNeeded} more application(s) and receive the same number of interviews to reach the target rate.`}
      </Typography>
    </div>
  );
};

export default InterviewEval;