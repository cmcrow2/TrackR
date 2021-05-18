import React, { useEffect, useState } from "react";
import { Grid, Typography, RadioGroup, Radio, Button } from '@material-ui/core';

const RadioForm = ({
  handleRadioSubmit,
  selectedValueAB,
  selectedValueCD,
  selectedValueEF,
  selectedValueGH,
  handleChangeAB,
  handleChangeCD,
  handleChangeEF,
  handleChangeGH
}) => {
  // const [selectedValueAB, setSelectedValueAB] = useState('a');
  // const [selectedValueCD, setSelectedValueCD] = useState('c');
  // const [selectedValueEF, setSelectedValueEF] = useState('e');
  // const [selectedValueGH, setSelectedValueGH] = useState('g');

  // radio event handlers
  // const handleChangeAB = (event) => {
  //   setSelectedValueAB(event.target.value);
  // };
  // const handleChangeCD = (event) => {
  //   setSelectedValueCD(event.target.value);
  // };
  // const handleChangeEF = (event) => {
  //   setSelectedValueEF(event.target.value);
  // };
  // const handleChangeGH = (event) => {
  //   setSelectedValueGH(event.target.value);
  // };

  return (
    <form onSubmit={handleRadioSubmit}>
      <Typography style={{ fontSize: 22 }}>
        Application Sent:
        </Typography>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Typography style={{ fontSize: 18 }}>Yes</Typography>
        </Grid>
        <Grid item>
          <Radio
            checked={selectedValueAB === 'a'}
            onChange={handleChangeAB}
            value="a"
            inputProps={{ 'aria-label': 'A' }}
          />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 18 }}>No</Typography>
        </Grid>
        <Grid item>
          <Radio
            checked={selectedValueAB === 'b'}
            onChange={handleChangeAB}
            value="b"
            inputProps={{ 'aria-label': 'B' }}
          />
        </Grid>
      </Grid>
      <Typography style={{ fontSize: 22 }}>
        Phone Screen Received:
        </Typography>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Typography style={{ fontSize: 18 }}>Yes</Typography>
        </Grid>
        <Grid item>
          <Radio
            checked={selectedValueCD === 'c'}
            onChange={handleChangeCD}
            value="c"
            inputProps={{ 'aria-label': 'C' }}
          />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 18 }}>No</Typography>
        </Grid>
        <Grid item>
          <Radio
            checked={selectedValueCD === 'd'}
            onChange={handleChangeCD}
            value="d"
            inputProps={{ 'aria-label': 'D' }}
          />
        </Grid>
      </Grid>
      <Typography style={{ fontSize: 22 }}>
        Interview Received:
        </Typography>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Typography style={{ fontSize: 18 }}>Yes</Typography>
        </Grid>
        <Grid item>
          <Radio
            checked={selectedValueEF === 'e'}
            onChange={handleChangeEF}
            value="e"
            inputProps={{ 'aria-label': 'E' }}
          />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 18 }}>No</Typography>
        </Grid>
        <Grid item>
          <Radio
            checked={selectedValueEF === 'f'}
            onChange={handleChangeEF}
            value="f"
            inputProps={{ 'aria-label': 'F' }}
          />
        </Grid>
      </Grid>
      <Typography style={{ fontSize: 22 }}>
        Offer Received:
        </Typography>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Typography style={{ fontSize: 18 }}>Yes</Typography>
        </Grid>
        <Grid item>
          <Radio
            checked={selectedValueGH === 'g'}
            onChange={handleChangeGH}
            value="g"
            inputProps={{ 'aria-label': 'G' }}
          />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 18 }}>No</Typography>
        </Grid>
        <Grid item>
          <Radio
            checked={selectedValueGH === 'h'}
            onChange={handleChangeGH}
            value="h"
            inputProps={{ 'aria-label': 'H' }}
          />
        </Grid>
      </Grid>
      <p>{`\n`}</p>
      <Button variant="outlined">
        <Typography style={{ fontSize: 18 }}>Submit</Typography>
      </Button>
    </form>
  );
};

export default RadioForm;