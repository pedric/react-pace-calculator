export default class Calculator {
  secondsPerKm = (minutes, seconds) => {
    return minutes * 60 + seconds;
  };

  secondsPerMeter = secondsKm => {
    return secondsKm / 1000;
  };

  totalTimeInSeconds = (seconds, length) => {
    return seconds * length;
  };

  totalHoursFromTotalTimeInSeconds = seconds => {
    return Math.floor(seconds / 3600);
  };
  totalMinutesAfterHours = seconds => {
    return Math.trunc((seconds % 3600) / 60);
  };

  totalSecondsAfterMinutes = (seconds, minutes) => {
    return Math.trunc((seconds % 3600) - minutes * 60);
  };

  hoursMinutesAndSecondsToSeconds = (h, m, s) => {
    const hours = h * 3600;
    const minutes = m * 60;
    const seconds = s;
    return hours + minutes + seconds;
  };

  metersToMiles = meters => {
    return parseInt(meters) * 0.621371;
  };

  secondsPerUnitFromSecondsAndDistance = (sec, length) => {
    return (parseInt(sec) / parseInt(length)) * 1000;
  };

  minutesPerUnitFromSeconds = sec => {
    return Math.trunc(sec / 60);
  };
}
