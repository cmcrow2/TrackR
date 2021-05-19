import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  Button
} from '@material-ui/core';

const RadioForm = ({ handleRadioSubmit, lastStepReached, setLastStepReached }) => {

  const handleRadioChange = (event) => {
    setLastStepReached(event.target.value);
  }

  return (
    <form onSubmit={handleRadioSubmit}>
      <FormControl component="fieldset">
        <RadioGroup aria-label="quiz" name="quiz" value={lastStepReached} onChange={handleRadioChange}>
          <FormControlLabel value="application" control={<Radio />} label="Application Sent" />
          <FormControlLabel value="phone" control={<Radio />} label="Phone Screening" />
          <FormControlLabel value="interview" control={<Radio />} label="Interview" />
          <FormControlLabel value="offer" control={<Radio />} label="I got an offer!" />
        </RadioGroup>
        <br />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default RadioForm;