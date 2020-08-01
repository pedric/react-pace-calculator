const TotalTimePageData = {
  finisherTime: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  pace: {
    minutesPerKm: 0,
    secondsPerKm: 0,
    minutesPerMiles: 0,
    secondsPerMiles: 0,
  },
  raceTypes: [
    {
      name: 'Choose race type',
      length: 0,
    },
    {
      name: '1500m',
      length: 1500,
    },
    {
      name: '3000m',
      length: 3000,
    },
    {
      name: '5000m',
      length: 5000,
    },
    {
      name: '10 000m',
      length: 10000,
    },
    {
      name: 'Half Marathon',
      length: 21097.5,
    },
    {
      name: 'Marathon',
      length: 42195,
    },
  ],
  raceName: '',
  raceLength: 0,
  totalTimeInSeconds: 0,
};

export default TotalTimePageData;
