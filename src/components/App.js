import React, { useEffect, useState } from "react";
import { Grid, Typography, RadioGroup, Radio, Divider, Box } from '@material-ui/core';
import axios from 'axios';

import RadioForm from './RadioForm.js';
import BaseConversion from './BaseConversion.js';
import UserConversion from './UserConversion.js';
import Evaluation from './evaluations/Evaluation.js';
import Header from './Header.js';
import calculateRates from '../helperFunctions/calculateRates.js';
import createNewApplication from '../helperFunctions/createNewApplication.js';

const App = () => {
  const [currentUser, setCurrentUser] = useState('cmcrow2');
  const [searchInput, setSearchInput] = useState(null);
  const [applicationData, setApplicationData] = useState([]);
  const [appsSent, setAppsSent] = useState(0);
  const [phoneScreens, setPhoneScreens] = useState(0);
  const [interviews, setInterviews] = useState(0);
  const [offers, setOffers] = useState(0);
  const [phoneScreensRate, setPhoneScreensRate] = useState(0);
  const [interviewsRate, setInterviewsRate] = useState(0);
  const [offersRate, setOffersRate] = useState(0);
  const [updatedRates, setUpdatedRates] = useState(0);
  const [lastStepReached, setLastStepReached] = useState('application');

  // update data on page load
  useEffect(() => {
    requestData(currentUser);
  }, []);

  // update rates on form submit
  useEffect(() => {
    requestData(currentUser);
  }, [updatedRates]);

  // axios request function
  const requestData = (user) => {
    axios.get(`http://localhost:3000/applications/${user}`)
      .then((applications) => {
        setApplicationData(applications.data);
        calculateRates(
          applications.data,
          setAppsSent, setPhoneScreens, setInterviews, setOffers,
          setPhoneScreensRate, setInterviewsRate, setOffersRate,
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // handle the form submit
  const handleRadioSubmit = (event) => {
    event.preventDefault();

    const newApplicationData = createNewApplication(lastStepReached);
    newApplicationData.username = currentUser;

    axios.post('/applications', newApplicationData)
      .then((res) => {
        setUpdatedRates(!updatedRates);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  // handle the user search
  const userSearchSubmit = (event) => {
    event.preventDefault();
    setCurrentUser(event.target.id);
    requestData(event.target.id);
  };

  return (
    <Grid>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} userSearchSubmit={userSearchSubmit} />
      <Box pt={14}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <Typography style={{ fontSize: 22 }}>
              <b>How far did you make it through the interview process?</b>
            </Typography>
            <br />
            <RadioForm
              handleRadioSubmit={handleRadioSubmit}
              lastStepReached={lastStepReached}
              setLastStepReached={setLastStepReached}
            />
            <br /><br />
            <Typography style={{ fontSize: 22 }}>
              <b>Explanation of the rates:</b>
            </Typography>
            <Typography style={{ fontSize: 18 }}>
              The target conversion rates are an average of the data reported by Hack Reactor grads. A recent grad of the program should seek to have 20% of their applications turn into phone screenings, 50% of phone screenings to turn into interviews, and 20% of interviews to turn into job offers.
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Box pl={6}>
              <Typography style={{fontSize: 30}}>
                <b>{`Showing User ${currentUser}'s Data:`}</b>
              </Typography>
            </Box>
            <br />
            <Divider />
            <br />
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
            <Evaluation
              phoneScreensRate={phoneScreensRate}
              interviewsRate={interviewsRate}
              offers={offers}
              appsSent={appsSent}
              phoneScreens={phoneScreens}
              interviews={interviews}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default App;