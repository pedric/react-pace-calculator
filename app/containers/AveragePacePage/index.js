import React from 'react';
import RangeInput from 'components/RangeInput';
import ResultsMonitor from 'components/ResultsMonitor';
import RunningData from 'data/data';

class AveragePacePage extends React.Component {
  constructor() {
    super();
    this.state = { ...RunningData };
    this.setPace = this.setPace.bind(this);
    this.setFinisherTime = this.setFinisherTime.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  // componentDidUpdate() {
  //   console.log('component did change');
  //   this.setFinisherTime();
  // }

  setPace = e => {
    const pace = { ...this.state.pace };
    if (e.target.name === 'minutes') {
      pace.minutesPerKm = parseInt(e.target.value);
      pace.minutesPerMiles = Math.trunc(parseInt(e.target.value) * 1.621371);
      this.setState({ pace });
    }
    if (e.target.name === 'seconds') {
      pace.secondsPerKm = parseInt(e.target.value);
      pace.secondsPerMiles = (parseInt(e.target.value) * 1.621371).toFixed(1);
      this.setState({ pace });
    }
    this.setFinisherTime();
  };

  async onAfterChange() {
    await this.setFinisherTime();
  }

  selectRace = e => {
    const selectedOption = e.target.childNodes[e.target.selectedIndex];
    const selectedRaceName = selectedOption.getAttribute('name');
    const raceLength = { ...this.state.raceLength };
    this.setState({
      raceLength: parseInt(e.target.value),
      raceName: selectedRaceName,
    });
    this.setFinisherTime();
  };

  async setFinisherTime() {
    const pace = { ...this.state.pace };
    const secondsPerKm = pace.minutesPerKm * 60 + pace.secondsPerKm;
    const secondsPerMeter = secondsPerKm / 1000;
    const totalTimeInSeconds = secondsPerMeter * this.state.raceLength;
    const totalHours = Math.floor(totalTimeInSeconds / 3600);
    const totalMinutesAfterHours = Math.trunc((totalTimeInSeconds % 3600) / 60);
    const totalSecondsAfterMinutes = Math.trunc(
      (totalTimeInSeconds % 3600) - totalMinutesAfterHours * 60,
    );
    await this.setState({ totalTimeInSeconds: totalTimeInSeconds });
    this.setState({
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
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength > 0 ? false : true}
          />
          <RangeInput
            name="seconds"
            value={this.state.pace.secondsPerKm}
            min={0}
            max={59}
            handleChange={this.setPace}
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

export default AveragePacePage;
