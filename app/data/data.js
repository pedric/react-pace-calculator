const RunningData = {
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
      name: 'Pick a race type',
      length: 0,
    },
    {
      name: '100m',
      length: 100,
    },
    {
      name: '200m',
      length: 200,
    },
    {
      name: '400m',
      length: 400,
    },
    {
      name: '800m',
      length: 800,
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
    {
      name: '50 Miles',
      length: 80467.2,
    },
    {
      name: '100 km',
      length: 100000,
    },
    {
      name: '100 Miles',
      length: 160934.4,
    },
  ],
  raceName: '',
  raceLength: 0,
  totalTimeInSeconds: 0,
};

export default RunningData;
