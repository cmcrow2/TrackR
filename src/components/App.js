import React, { useEffect, useState } from "react";
import { Grid, Typography, RadioGroup, Radio, Divider, Box } from '@material-ui/core';
import RadioForm from './RadioForm.js';
import axios from 'axios';

const App = () => {
  const [applicationData, setApplicationData] = useState([]);
  const [appsSent, setAppsSent] = useState(0);
  const [phoneScreens, setPhoneScreens] = useState(0);
  const [interviews, setInterviews] = useState(0);
  const [offers, setOffers] = useState(0);
  const [phoneScreensRate, setPhoneScreensRate] = useState(0);
  const [interviewsRate, setInterviewsRate] = useState(0);
  const [offersRate, setOffersRate] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/applications')
      .then((applications) => {
        setApplicationData(applications.data);
        calculateRates(applications.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // calculates the user's conversion rates and sets the amounts
  const calculateRates = (data) => {
    let appsSentCount = 0;
    let phoneScreensCount = 0;
    let interviewsCount = 0;
    let offersCount = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].application === true) {
        appsSentCount++;
      }
      if (data[i].phone_screen === true) {
        phoneScreensCount++;
      }
      if (data[i].interview === true) {
        interviewsCount++;
      }
      if (data[i].offer === true) {
        offersCount++;
      }
    }
    setAppsSent(appsSentCount);
    setPhoneScreens(phoneScreensCount);
    setInterviews(interviewsCount);
    setOffers(offersCount);

    setPhoneScreensRate((phoneScreensCount / data.length) * 100);
    setInterviewsRate((interviewsCount / data.length) * 100);
    setOffersRate((offersCount / data.length) * 100);
  };

  return (
    <Box pt={16}>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <Typography style={{ fontSize: 30 }}>
            <b>How far did you make it through the interview process?</b>
          </Typography>
          <p>{'\n'}</p>
          <RadioForm />
        </Grid>
        <Grid item xs={7}>
          <Grid container direction="row" justify="center">
            <Grid item>
              <Box pr={4}>
                <Typography style={{ fontSize: 30 }}>
                  <b>Base Conversion Rates:</b>
                </Typography>
                <p>{'\n'}</p>
                <Typography style={{ fontSize: 26 }}>
                  100 Applications Sent
                  </Typography>
                <Typography style={{ fontSize: 26 }}>
                  20 Phone Screens (20%)
                  </Typography>
                <Typography style={{ fontSize: 26 }}>
                  10 In-Person Interviews (50%)
                  </Typography>
                <Typography style={{ fontSize: 26 }}>
                  2 Offers (20%)
                  </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box pl={4}>
                <Typography style={{ fontSize: 30 }}>
                  <b>Your conversion rates:</b>
                </Typography>
                <p>{'\n'}</p>
                <Typography style={{ fontSize: 26 }}>
                  {`${appsSent} Applications Sent`}
                </Typography>
                <Typography style={{ fontSize: 26 }}>
                  {`${phoneScreens} Phone Screens (${phoneScreensRate}%)`}
                </Typography>
                <Typography style={{ fontSize: 26 }}>
                  {`${interviews} In-Person Interviews (${interviewsRate}%)`}
                </Typography>
                <Typography style={{ fontSize: 26 }}>
                  {`${offers} Offers (${offersRate}%)`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <p>{'\n'}</p>
          <Divider />
          <p>{'\n'}</p>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};

export default App;