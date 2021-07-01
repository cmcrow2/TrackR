import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

import calculateNumNeeded from '../../helperFunctions/calculateNumNeeded.js';
import PhoneEval from './PhoneEval.js';
import InterviewEval from './InterviewEval.js';

const EvalText = ({
  phoneScreensRate,
  interviewsRate,
  offers,
  appsSent,
  phoneScreens,
  interviews
}) => {

  let phoneScreensNeeded = calculateNumNeeded(appsSent, phoneScreens, 20);
  let interviewsNeeded = calculateNumNeeded(phoneScreens, interviews, 50);

  return (
    <div>
      { phoneScreensRate < 20
        ? <PhoneEval phoneScreensNeeded={phoneScreensNeeded} />
        : <Typography style={{ fontSize: 22 }}>
          You're doing very well receiving phone screenings from the companies you have applied to!
        </Typography>
      }
      <br />
      { interviewsRate < 50
        ? <InterviewEval interviewsNeeded={interviewsNeeded} />
        : <Typography style={{ fontSize: 22 }}>
          You're doing very well receiving phone screens from the companies you have applied to!
        </Typography>
      }
      <br />
      { offers < 1
        ? <Typography style={{ fontSize: 22 }}>
        You haven't received an offer yet. You should practice toy problems and refresh your knowledge on common interview questions. You only need 1 offer regardless of your conversion rate. You got this!
        </Typography>
        : <Typography style={{ fontSize: 22 }}>
          Congratulations of receiving a job offer! Thank you for using TrackR, good luck on the next step of your journey as a Software Engineer!
        </Typography>
      }
    </div>
  );
};

export default EvalText;