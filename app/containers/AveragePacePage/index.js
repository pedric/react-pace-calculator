import React from 'react';
import RangeInput from 'components/RangeInput';
import ResultsMonitor from 'components/ResultsMonitor';
import TotalTimePageData from './data';

class TotalTimePage extends React.Component {
  constructor() {
    super();
    this.state = { ...TotalTimePageData };
    this.setFinisherTime = this.setFinisherTime.bind(this);
    this.setTimeInSeconds = this.setTimeInSeconds.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  async setFinisherTime(e) {
    const pace = { ...this.state.pace };
    if (e.target.name === 'minutes') {
      pace.minutesPerKm = parseInt(e.target.value);
      this.setState({ pace });
    }
    if (e.target.name === 'seconds') {
      pace.secondsPerKm = parseInt(e.target.value);
      this.setState({ pace });
    }
    console.log(this.state);
    // await this.setTimeInSeconds();
  }

  async onAfterChange() {
    await this.setTimeInSeconds();
  }

  async setTimeInSeconds() {
    const hours = this.state.pace.hours * 3600;
    const minutes = this.state.finisherTime.minutes * 60;
    const seconds = this.state.finisherTime.seconds;
    const secondsOfRacing = hours + minutes + seconds;
    const totalTimeInSeconds = { ...this.state.totalTimeInSeconds };
    await this.setState({ totalTimeInSeconds: secondsOfRacing });
    await this.setPace();
  }

  selectRace = e => {
    const selectedOption = e.target.childNodes[e.target.selectedIndex];
    const selectedRaceName = selectedOption.getAttribute('name');
    // console.log('selectRace: ', selectedRaceName);
    // console.log('race set: ', e.target.value);
    const raceLength = { ...this.state.raceLength };
    this.setState({
      raceLength: parseInt(e.target.value),
      raceName: selectedRaceName,
    });
    this.setTimeInSeconds();
  };

  async setPace() {
    const pace = { ...this.state.pace.minutes };
    const miles = parseInt(this.state.raceLength) * 0.621371;
    const secondsPerKilometer =
      (parseInt(this.state.totalTimeInSeconds) /
        parseInt(this.state.raceLength)) *
      1000;
    const secondsPerMiles =
      (parseInt(this.state.totalTimeInSeconds) / parseInt(miles)) * 1000;
    const minutesKm = Math.trunc(secondsPerKilometer / 60);
    const secondsKm = Math.trunc(secondsPerKilometer % 60);
    const minutesMiles = Math.trunc(secondsPerMiles / 60);
    const secondsMiles = (secondsPerMiles % 60).toFixed(1);
    this.setState({
      pace: {
        minutesPerKm: minutesKm,
        secondsPerKm: secondsKm,
        minutesPerMiles: minutesMiles,
        secondsPerMiles: secondsMiles,
      },
    });
  }

  render() {
    // console.log(this.state);
    const raceOptions = this.state.raceTypes.map(race => (
      <option key={race.name} value={race.length} name={race.name}>
        {race.name}
      </option>
    ));
    return (
      <div className={'container'}>
        <div style={{ padding: '10px' }}>
          <select id="races" onChange={this.selectRace}>
            {raceOptions}
          </select>
        </div>
        <form>
          <RangeInput
            name="minutes"
            value={this.state.pace.minutesPerKm}
            min={0}
            max={60}
            handleChange={this.setFinisherTime}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength > 0 ? false : true}
          />
          <RangeInput
            name="seconds"
            value={this.state.pace.secondsPerKm}
            min={0}
            max={60}
            handleChange={this.setFinisherTime}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength > 0 ? false : true}
          />
        </form>
        <ResultsMonitor
          name={this.state.raceName}
          distance={this.state.raceLength}
          finisherHours={this.state.finisherTime.hours}
          finisherMinutes={this.state.finisherTime.minutes}
          finisherSeconds={this.state.finisherTime.seconds}
          paceMinutesPerKm={this.state.pace.minutesPerKm}
          paceSecondsPerKm={this.state.pace.secondsPerKm}
          paceMinutesPerMiles={this.state.pace.minutesPerMiles}
          paceSecondsPerMiles={this.state.pace.secondsPerMiles}
        />
      </div>
    );
  }
}

export default TotalTimePage;
