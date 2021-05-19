import React, { useEffect, useState } from "react";
import { Grid, Typography, RadioGroup, Radio, Divider, Box } from '@material-ui/core';
import axios from 'axios';

import RadioForm from './RadioForm.js';
import BaseConversion from './BaseConversion.js';
import UserConversion from './UserConversion.js';
import calculateRates from '../helperFunctions/calculateRates.js';
import createNewApplication from '../helperFunctions/createNewApplication.js'

const App = () => {
  const [applicationData, setApplicationData] = useState([]);
  const [appsSent, setAppsSent] = useState(0);
  const [phoneScreens, setPhoneScreens] = useState(0);
  const [interviews, setInterviews] = useState(0);
  const [offers, setOffers] = useState(0);
  const [phoneScreensRate, setPhoneScreensRate] = useState(0);
  const [interviewsRate, setInterviewsRate] = useState(0);
  const [offersRate, setOffersRate] = useState(0);
  const [updatedRates, setUpdatedRates] = useState(false);
  const [lastStepReached, setLastStepReached] = useState('');

  // update data on page load
  useEffect(() => {
    requestData();
  }, []);

  // update rates on form submit
  useEffect(() => {
    requestData();
  }, [updatedRates]);

  // axios request function
  const requestData = () => {
    axios.get('http://localhost:3000/applications')
      .then((applications) => {
        setApplicationData(applications.data);
        calculateRates(
          applications.data,
          setAppsSent, setPhoneScreens, setInterviews, setOffers,
          setPhoneScreensRate, setInterviewsRate, setOffersRate
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // handle the form submit
  const handleRadioSubmit = (event) => {
    event.preventDefault();

    const newApplicationData = createNewApplication(lastStepReached);

    axios.post('/applications', newApplicationData)
      .then((res) => {
        setUpdatedRates(!updatedRates);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <Box pt={16}>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <Typography style={{ fontSize: 30 }}>
            <b>How far did you make it through the interview process?</b>
          </Typography>
          <br />
          <RadioForm
            handleRadioSubmit={handleRadioSubmit}
            lastStepReached={lastStepReached}
            setLastStepReached={setLastStepReached}
          />
        </Grid>
        <Grid item xs={7}>
          <Box pl={6}>
            <Grid container direction="row">
              <BaseConversion />
              <Grid item xs={2}></Grid>
              <UserConversion
                appsSent={appsSent}
                phoneScreens={phoneScreens}
                interviews={interviews}
                offers={offers}
                phoneScreensRate={phoneScreensRate}
                interviewsRate={interviewsRate}
                offersRate={offersRate}
              />
            </Grid>
          </Box>
          <br />
          <Divider />
          <br />
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
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};

export default App;