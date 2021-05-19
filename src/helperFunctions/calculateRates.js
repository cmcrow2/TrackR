// calculates the user's conversion rates and sets the amounts
const calculateRates = (
  data,
  setAppsSent, setPhoneScreens, setInterviews, setOffers,
  setPhoneScreensRate, setInterviewsRate, setOffersRate
) => {
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

  setPhoneScreensRate(Math.round((phoneScreensCount / data.length) * 100));
  setInterviewsRate(Math.round((interviewsCount / data.length) * 100));
  setOffersRate(Math.round((offersCount / data.length) * 100));
};

export default calculateRates;