import React from 'react';
import RangeInput from 'components/RangeInput';
import ResultsMonitor from 'components/ResultsMonitor';
import UnitPicker from 'components/UnitPicker';
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

  setPace = e => {
    const pace = { ...this.state.pace };
    let milePace = 0;
    let kmPace = 0;
    if (e.target.name === 'minutes') {
      if (this.state.units === 'metric') {
        pace.minutesPerKm = parseInt(e.target.value);
      } else if (this.state.units === 'imperial') {
        pace.minutesPerMiles = parseInt(e.target.value);
      }
    }
    if (e.target.name === 'seconds') {
      if (this.state.units === 'metric') {
        pace.secondsPerKm = parseInt(e.target.value);
      } else if (this.state.units === 'imperial') {
        pace.secondsPerMiles = parseInt(e.target.value);
      }
    }
    if (this.state.units === 'metric') {
      milePace = this.calculator.kmPaceToMilePace(
        pace.minutesPerKm,
        pace.secondsPerKm,
        this.state.raceLength.meters,
      );
      pace.minutesPerMiles = milePace.minutes;
      pace.secondsPerMiles = milePace.seconds;
    } else if (this.state.units === 'imperial') {
      kmPace = this.calculator.milePaceToKmPace(
        pace.minutesPerMiles,
        pace.secondsPerMiles,
        this.calculator.metersToMiles(this.state.raceLength.meters),
      );
      pace.minutesPerKm = kmPace.minutes;
      pace.secondsPerKm = kmPace.seconds;
    }
    this.setState({ pace });
  };

  async setRaceTimeInSeconds() {
    const secondsOfRacing = this.calculator.totalTimeInSecondsFromPaceAndDistance(
      this.state.pace.minutesPerKm,
      this.state.pace.secondsPerKm,
      this.state.raceLength.meters,
    );
    this.setState({ totalTimeInSeconds: secondsOfRacing });
  }

  async onAfterChange() {
    await this.setRaceTimeInSeconds();
    await this.setFinisherTime();
  }

  selectRace = e => {
    const selectedOption = e.target.childNodes[e.target.selectedIndex];
    const selectedRaceName = selectedOption.getAttribute('name');
    const meters = selectedOption.getAttribute('value');
    const miles = this.calculator.metersToMiles(meters);
    this.setState({ raceName: selectedRaceName });
    // const raceLength = { ...this.state.raceLength };
    if (meters > 0) {
      this.setState({
        raceLength: {
          meters: parseInt(meters),
          miles: parseInt(miles),
        },
      });
    }
    this.onAfterChange();
  };

  async setFinisherTime() {
    let finisherTime = { ...this.state.finisherTime };
    const time = this.calculator.hoursMinutesAndSecondsFromSeconds(
      this.state.totalTimeInSeconds,
    );
    finisherTime = time;
    this.setState({ finisherTime });
  }

  setUnits = e => {
    this.setState({ units: e.target.value });
  };

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
        <div style={{ padding: '10px' }}>
          <UnitPicker
            handleChange={this.setUnits}
            active={this.state.units}
            mouseUpFunction={this.onAfterChange}
            metricLabel={'km/min'}
            imperialLabel={'mi/min'}
          />
        </div>
        <form>
          <RangeInput
            name="minutes"
            label={this.state.units === 'metric' ? 'minutes/km' : 'minutes/mi'}
            value={
              this.state.units === 'metric'
                ? this.state.pace.minutesPerKm
                : this.state.pace.minutesPerMiles
            }
            min={0}
            max={30}
            handleChange={this.setPace}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength.meters > 0 ? false : true}
          />
          <RangeInput
            name="seconds"
            label={this.state.units === 'metric' ? 'seconds/km' : 'seconds/mi'}
            value={
              this.state.units === 'metric'
                ? this.state.pace.secondsPerKm
                : this.state.pace.secondsPerMiles
            }
            min={0}
            max={59}
            handleChange={this.setPace}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength.meters > 0 ? false : true}
          />
        </form>
        <ResultsMonitor
          name={this.state.raceName}
          distanceKm={this.state.raceLength.length}
          distanceMiles={this.state.raceLength.miles}
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
