/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RangeInput from 'components/RangeInput';
import ResultsMonitor from 'components/ResultsMonitor';
import TotalTimePageData from './data';

class TotalTimePage extends React.Component {
  constructor() {
    super();
    this.state = TotalTimePageData;
    this.setFinisherTime = this.setFinisherTime.bind(this);
  }

  setFinisherTime = e => {
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
    let secondsOfRacing =
      this.state.finisherTime.hours * 3600 +
      this.state.finisherTime.minutes * 60 +
      this.state.finisherTime.seconds;
    const totalTimeInSeconds = { ...this.state.totalTimeInSeconds };
    this.setState({ totalTimeInSeconds: secondsOfRacing });
  };

  selectRace = e => {
    console.log('race set: ', e.target.value);
    const raceLength = { ...this.state.raceLength };
    this.setState({ raceLength: parseInt(e.target.value) });
  };

  render() {
    console.log(this.state);
    const raceOptions = this.state.raceTypes.map(race => (
      <option key={race.name} value={race.length}>
        {race.name}
      </option>
    ));
    return (
      <div>
        <select id={'races'} onChange={this.selectRace}>
          {raceOptions}
        </select>
        <RangeInput
          name={'hours'}
          value={this.state.finisherTime.hours}
          min={0}
          max={6}
          handler={this.setFinisherTime}
        />
        <RangeInput
          name={'minutes'}
          value={this.state.finisherTime.minutes}
          min={0}
          max={60}
          handler={this.setFinisherTime}
        />
        <RangeInput
          name={'seconds'}
          value={this.state.finisherTime.seconds}
          min={0}
          max={60}
          handler={this.setFinisherTime}
        />
        <ResultsMonitor
          finisherHours={this.state.finisherTime.hours}
          finisherMinutes={this.state.finisherTime.minutes}
          finisherSeconds={this.state.finisherTime.seconds}
          paceMinutes={this.state.pace.minutes}
          paceSeconds={this.state.pace.seconds}
        />
      </div>
    );
  }
}

export default TotalTimePage;
