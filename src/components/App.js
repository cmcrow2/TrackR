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
  const [updatedRates, setUpdatedRates] = useState(false);
  const [selectedValueAB, setSelectedValueAB] = useState('a');
  const [selectedValueCD, setSelectedValueCD] = useState('c');
  const [selectedValueEF, setSelectedValueEF] = useState('e');
  const [selectedValueGH, setSelectedValueGH] = useState('g');

  useEffect(() => {
    requestData();
  }, []);

  useEffect(() => {
    requestData();
  }, [updatedRates]);

  // axios request function
  const requestData = () => {
    axios.get('http://localhost:3000/applications')
      .then((applications) => {
        setApplicationData(applications.data);
        calculateRates(applications.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

  // handle the form submit
  const handleRadioSubmit = (event) => {
    setUpdatedRates(!updatedRates);
  };

  // handle changes to the radios
  const handleChangeAB = (event) => {
    setSelectedValueAB(event.target.value);
  };
  const handleChangeCD = (event) => {
    setSelectedValueCD(event.target.value);
  };
  const handleChangeEF = (event) => {
    setSelectedValueEF(event.target.value);
  };
  const handleChangeGH = (event) => {
    setSelectedValueGH(event.target.value);
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
            selectedValueAB={selectedValueAB}
            selectedValueCD={selectedValueCD}
            selectedValueEF={selectedValueEF}
            selectedValueGH={selectedValueGH}
            handleChangeAB={handleChangeAB}
            handleChangeCD={handleChangeCD}
            handleChangeEF={handleChangeEF}
            handleChangeGH={handleChangeGH}
          />
        </Grid>
        <Grid item xs={7}>
          <Box pl={6}>
            <Grid container direction="row">
              <Grid item xs={5}>
                <Box>
                  <Typography style={{ fontSize: 30 }}>
                    <b>Base Conversion Rates:</b>
                  </Typography>
                  <br />
                  <Typography style={{ fontSize: 22 }}>
                    100 Applications Sent
                  </Typography>
                  <Typography style={{ fontSize: 22 }}>
                    20 Phone Screens (20%)
                  </Typography>
                  <Typography style={{ fontSize: 22 }}>
                    10 In-Person Interviews (50%)
                  </Typography>
                  <Typography style={{ fontSize: 22 }}>
                    2 Offers (20%)
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <Box>
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
                </Box>
              </Grid>
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
                  You are having some difficulty receiving phone screens from the companies you applied to. You should look over your resume again and see what you could change to make it better.
                </Typography>
                : <Typography style={{ fontSize: 22 }}>
                  You're doing very well receiving interviews from the companies you applied to!
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
                You are having some difficulty getting offers from the companies you applied to. You should practice toy problems and refresh your knowledge on common interview questions.
                </Typography>
                : <Typography style={{ fontSize: 22 }}>
                  Congratulations! Thank you for using Trackr, good luck on the next step of your journey as a Software Developer!
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