export default class Calculator {
  kmPaceToMilePace = (minutes, seconds, length) => {
    const secondsForTheWholeDistance =
      ((minutes * 60 + seconds) / 1000) * length;
    const miles = this.metersToMiles(length);
    const secondsPerMiles = this.secondsPerUnitFromSecondsAndDistance(
      secondsForTheWholeDistance,
      miles,
    );
    let paceInMiles = this.minutesAndSecondsFromSeconds(secondsPerMiles);
    return paceInMiles;
  };

  milePaceToKmPace = (minutes, seconds, length) => {
    // one mile = 1.609344 km or 1 609.344 meters
    const secondsForTheWholeDistance =
      ((minutes * 60 + seconds) / 1609) * length;
    const secondsPerKm = this.secondsPerUnitFromSecondsAndDistance(
      secondsForTheWholeDistance,
      length,
    );
    let paceInKm = this.minutesAndSecondsFromSeconds(secondsPerKm);
    return paceInKm;
  };

  secondsPerKm = (minutes, seconds) => {
    return minutes * 60 + seconds;
  };

  secondsPerKmFromMiles = (minutes, seconds, length) => {
    const totalOfSeconds = minutes * 60 + seconds;
    const distance = this.milesToMeters(length);
    return totalOfSeconds / distance;
  };

  secondsPerMeter = secondsKm => {
    return secondsKm / 1000;
  };

  totalTimeInSeconds = (seconds, length) => {
    return seconds * length;
  };

  totalTimeInSecondsFromPaceAndDistance = (minutes, seconds, length) => {
    return (parseInt(minutes * 60 + seconds) / 1000) * length;
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

  hoursMinutesAndSecondsFromSeconds = sec => {
    const h = this.totalHoursFromTotalTimeInSeconds(sec);
    const m = this.totalMinutesAfterHours(sec);
    const s = this.totalSecondsAfterMinutes(sec, m);
    return {
      hours: h,
      minutes: m,
      seconds: s,
    };
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

  milesToMeters = miles => {
    return parseInt(miles) / 0.621371;
  };

  minutesAndSecondsFromSeconds = sec => {
    const minutes = Math.trunc(sec / 60);
    const seconds = Math.trunc(sec % 60);
    return { minutes: minutes, seconds: seconds };
  };

  secondsPerUnitFromSecondsAndDistance = (sec, length) => {
    return (parseInt(sec) / parseInt(length)) * 1000;
  };

  minutesPerUnitFromSeconds = sec => {
    return Math.trunc(sec / 60);
  };

  secondsPerUnitFromSeconds = sec => {
    return Math.trunc(sec % 60);
  };

  paceInmilesFromStateData(state) {
    const secondsOfRacing = this.hoursMinutesAndSecondsToSeconds(
      state.finisherTime.hours,
      state.finisherTime.minutes,
      state.finisherTime.seconds,
    );
    const miles = this.metersToMiles(state.raceLength.meters);
    const secondsPerMiles = this.secondsPerUnitFromSecondsAndDistance(
      secondsOfRacing,
      miles,
    );
    let paceInmiles = this.minutesAndSecondsFromSeconds(secondsPerMiles);
    return paceInmiles;
  }

  paceInKmFromStateData(state) {
    const secondsOfRacing = this.hoursMinutesAndSecondsToSeconds(
      state.finisherTime.hours,
      state.finisherTime.minutes,
      state.finisherTime.seconds,
    );
    const secondsPerKm = this.secondsPerUnitFromSecondsAndDistance(
      secondsOfRacing,
      state.raceLength,
    );
    let paceInKm = this.minutesAndSecondsFromSeconds(secondsPerKm);
    return paceInKm;
  }
}
