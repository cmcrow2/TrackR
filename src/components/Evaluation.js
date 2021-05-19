import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

const Evaluation = ({ phoneScreensRate, interviewsRate, offers }) => {

  return (
    <Grid item>
      <Box pl={6}>
        <Typography style={{ fontSize: 30 }}>
          <b>Evaluation:</b>
        </Typography>
        <br />
        { phoneScreensRate < 20
          ? <Typography style={{ fontSize: 22 }}>
            You are having some difficulty receiving phone screenings from the companies you applied to. You should look over your resume again and see what you could change to make it better.
          </Typography>
          : <Typography style={{ fontSize: 22 }}>
            You're doing very well receiving phone screenings from the companies you applied to!
          </Typography>
        }
        <br />
        { interviewsRate < 50
          ? <Typography style={{ fontSize: 22 }}>
            You are having some difficulty receiving interviews from the companies you applied to. You should practice and improve your personal narrative.
          </Typography>
          : <Typography style={{ fontSize: 22 }}>
            You're doing very well receiving phone screens from the companies you applied to!
          </Typography>
        }
        <br />
        { offers < 1
          ? <Typography style={{ fontSize: 22 }}>
          You are having some difficulty receiving offers from the companies you applied to. You should practice toy problems and refresh your knowledge on common interview questions.
          </Typography>
          : <Typography style={{ fontSize: 22 }}>
            Congratulations! Thank you for using TrackR, good luck on the next step of your journey as a Software Engineer!
          </Typography>
        }
      </Box>
    </Grid>
  );
};

export default Evaluation;