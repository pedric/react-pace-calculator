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
      miles: 0,
    },
    {
      name: '100m',
      length: 100,
      miles: 62.13,
    },
    {
      name: '200m',
      length: 200,
      miles: 124.27,
    },
    {
      name: '400m',
      length: 400,
      miles: 248.54,
    },
    {
      name: '800m',
      length: 800,
      miles: 497.1,
    },
    {
      name: '1500m',
      length: 1500,
      miles: 932.1,
    },
    {
      name: '3000m',
      length: 3000,
      miles: 1864,
    },
    {
      name: '5000m',
      length: 5000,
      miles: 3106.1,
    },
    {
      name: '10 000m',
      length: 10000,
      miles: 6213.1,
    },
    {
      name: 'Half Marathon',
      length: 21097.5,
      miles: 13109.4,
    },
    {
      name: 'Marathon',
      length: 42195,
      miles: 26218.1,
    },
    {
      name: '50 Miles',
      length: 80467.2,
      miles: 50,
    },
    {
      name: '100 km',
      length: 100000,
      miles: 62137.1,
    },
    {
      name: '100 Miles',
      length: 160934.4,
      miles: 100,
    },
  ],
  raceName: '',
  raceLength: {
    meters: 0,
    miles: 0,
  },
  totalTimeInSeconds: 0,
  units: 'metric',
};

export default RunningData;
