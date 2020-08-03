import React from 'react';
import RangeInput from 'components/RangeInput';
import ResultsMonitor from 'components/ResultsMonitor';
import RunningData from 'data/data';
import Calculator from 'classes/Calculator';

class AveragePacePage extends React.Component {
  constructor() {
    super();
    this.state = { ...RunningData };
    this.setPace = this.setPace.bind(this);
    this.setFinisherTime = this.setFinisherTime.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
    this.calculator = new Calculator();
  }

  async setPace(e) {
    // console.log(this.state);
    const pace = { ...this.state.pace };
    pace.minutesPerKm = this.state.pace.minutesPerKm;
    pace.secondsPerKm = this.state.pace.secondsPerKm;
    if (e.target.name === 'minutes') {
      pace.minutesPerKm = parseInt(e.target.value);
    }
    if (e.target.name === 'seconds') {
      pace.secondsPerKm = parseInt(e.target.value);
    }
    const secondsOfRacing = this.calculator.hoursMinutesAndSecondsToSeconds(
      this.state.finisherTime.hours,
      this.state.finisherTime.minutes,
      this.state.finisherTime.seconds,
    );
    const miles = this.calculator.metersToMiles(this.state.raceLength);
    const secondsPerMiles = this.calculator.secondsPerUnitFromSecondsAndDistance(
      this.state.totalTimeInSeconds,
      miles,
    );
    let paceInmiles = this.calculator.minutesAndSecondsFromSeconds(
      secondsPerMiles,
    );
    pace.minutesPerMiles = paceInmiles.minutes;
    pace.secondsPerMiles = paceInmiles.seconds;
    this.setState({ pace });
    this.setState({ totalTimeInSeconds: secondsOfRacing });
    this.onAfterChange();
  }

  async setPaceAfterChange() {
    const pace = { ...this.state.pace };
    pace.minutesPerKm = this.state.pace.minutesPerKm;
    pace.secondsPerKm = this.state.pace.secondsPerKm;
    const secondsOfRacing = this.calculator.hoursMinutesAndSecondsToSeconds(
      this.state.finisherTime.hours,
      this.state.finisherTime.minutes,
      this.state.finisherTime.seconds,
    );
    const miles = this.calculator.metersToMiles(this.state.raceLength);
    const secondsPerMiles = this.calculator.secondsPerUnitFromSecondsAndDistance(
      this.state.totalTimeInSeconds,
      miles,
    );
    let paceInmiles = this.calculator.minutesAndSecondsFromSeconds(
      secondsPerMiles,
    );
    pace.minutesPerMiles = paceInmiles.minutes;
    pace.secondsPerMiles = paceInmiles.seconds;
    this.setState({ pace });
  }

  async onAfterChange() {
    await this.setFinisherTime();
    await this.setPaceAfterChange();
  }

  selectRace = e => {
    const selectedOption = e.target.childNodes[e.target.selectedIndex];
    const selectedRaceName = selectedOption.getAttribute('name');
    const raceLength = { ...this.state.raceLength };
    this.setState({
      raceLength: parseInt(e.target.value),
      raceName: selectedRaceName,
    });
    this.onAfterChange();
  };

  async setFinisherTime() {
    const pace = { ...this.state.pace };
    const secondsPerKm = this.calculator.secondsPerKm(
      pace.minutesPerKm,
      pace.secondsPerKm,
    );
    const secondsPerMeter = this.calculator.secondsPerMeter(secondsPerKm);
    const totalTimeInSeconds = this.calculator.totalTimeInSeconds(
      secondsPerMeter,
      this.state.raceLength,
    );
    const totalHours = this.calculator.totalHoursFromTotalTimeInSeconds(
      totalTimeInSeconds,
    );
    const totalMinutesAfterHours = this.calculator.totalMinutesAfterHours(
      totalTimeInSeconds,
    );
    const totalSecondsAfterMinutes = this.calculator.totalSecondsAfterMinutes(
      totalTimeInSeconds,
      totalMinutesAfterHours,
    );
    // this.setState({ totalTimeInSeconds: totalTimeInSeconds });
    this.setState({
      totalTimeInSeconds: totalTimeInSeconds,
      finisherTime: {
        hours: totalHours,
        minutes: totalMinutesAfterHours,
        seconds: totalSecondsAfterMinutes,
      },
    });
  }

  render() {
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
            max={30}
            handleChange={this.setPace}
            mouseUpFunction={this.setPace}
            active={this.state.raceLength > 0 ? false : true}
          />
          <RangeInput
            name="seconds"
            value={this.state.pace.secondsPerKm}
            min={0}
            max={59}
            handleChange={this.setPace}
            mouseUpFunction={this.setPace}
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

export default AveragePacePage;
