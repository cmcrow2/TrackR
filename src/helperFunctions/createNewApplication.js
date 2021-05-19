// formats new data received from the radio form and returns the data
const createNewApplication = (lastStepReached) => {
  const newData = {
    application: true,
    phone_screen: false,
    interview: false,
    offer: false
  };

  if (lastStepReached === 'phone') {
    newData.phone_screen = true;
  } else if (lastStepReached === 'interview') {
    newData.phone_screen = true;
    newData.interview = true;
  } else if (lastStepReached === 'offer') {
    newData.phone_screen = true;
    newData.interview = true;
    newData.offer = true;
  }

  return newData;
};

export default createNewApplication;