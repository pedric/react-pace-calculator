import React from 'react';
import RangeInput from 'components/RangeInput';
import ResultsMonitor from 'components/ResultsMonitor';
import RunningData from 'data/data';
import Calculator from 'classes/Calculator';

class TotalTimePage extends React.Component {
  constructor() {
    super();
    this.state = { ...RunningData };
    this.setFinisherTime = this.setFinisherTime.bind(this);
    this.setTimeInSeconds = this.setTimeInSeconds.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
    this.calculator = new Calculator();
  }

  async setFinisherTime(e) {
    const finisherTime = { ...this.state.finisherTime };
    if (e.target.name === 'hours') {
      finisherTime.hours = parseInt(e.target.value);
      this.setState({ finisherTime });
    }
    if (e.target.name === 'minutes') {
      finisherTime.minutes = parseInt(e.target.value);
      this.setState({ finisherTime });
    }
    if (e.target.name === 'seconds') {
      finisherTime.seconds = parseInt(e.target.value);
      this.setState({ finisherTime });
    }
    // this.setTimeInSeconds();
  }

  async onAfterChange() {
    await this.setTimeInSeconds();
  }

  async setTimeInSeconds() {
    const secondsOfRacing = this.calculator.hoursMinutesAndSecondsToSeconds(
      this.state.finisherTime.hours,
      this.state.finisherTime.minutes,
      this.state.finisherTime.seconds,
    );
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
    const miles = this.calculator.metersToMiles(this.state.raceLength);
    const secondsPerKilometer = this.calculator.secondsPerUnitFromSecondsAndDistance(
      this.state.totalTimeInSeconds,
      this.state.raceLength,
    );
    const secondsPerMiles = this.calculator.secondsPerUnitFromSecondsAndDistance(
      this.state.totalTimeInSeconds,
      miles,
    );
    const minutesKm = this.calculator.minutesPerUnitFromSeconds(
      secondsPerKilometer,
    );
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
            name="hours"
            value={this.state.finisherTime.hours}
            min={0}
            max={24}
            handleChange={this.setFinisherTime}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength > 0 ? false : true}
          />
          <RangeInput
            name="minutes"
            value={this.state.finisherTime.minutes}
            min={0}
            max={59}
            handleChange={this.setFinisherTime}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength > 0 ? false : true}
          />
          <RangeInput
            name="seconds"
            value={this.state.finisherTime.seconds}
            min={0}
            max={59}
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
