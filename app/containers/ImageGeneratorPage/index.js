/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import RangeInput from 'components/RangeInput';
import ImageUpload from 'components/ImageUpload';
import ShareImage from 'components/ShareImage';
import UnitPicker from 'components/UnitPicker';
import RunningData from 'data/data';
import Calculator from 'classes/Calculator';

class ImageGeneratorPage extends React.Component {
  constructor() {
    super();
    this.state = { ...RunningData };
    this.setFinisherTime = this.setFinisherTime.bind(this);
    this.setTimeInSeconds = this.setTimeInSeconds.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculator = new Calculator();
  }

  handleChange = e => {
    const url = URL.createObjectURL(e.target.files[0]);
    this.setState({ image: url });
  };

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
    const raceLength = { ...this.state.raceLength };
    this.setState({
      raceLength: parseInt(e.target.value * 1000),
      raceName: e.target.value + 'km',
    });
    this.setTimeInSeconds();
  };

  async setPace() {
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
    const secondsKm = this.calculator.secondsPerUnitFromSeconds(
      secondsPerKilometer,
    );
    const minutesMiles = this.calculator.minutesPerUnitFromSeconds(
      secondsPerMiles,
    );
    const secondsMiles = this.calculator.secondsPerUnitFromSeconds(
      secondsPerMiles,
    );
    this.setState({
      pace: {
        minutesPerKm: minutesKm,
        secondsPerKm: secondsKm,
        minutesPerMiles: minutesMiles,
        secondsPerMiles: secondsMiles,
      },
    });
  }

  setUnits = e => {
    this.setState({ units: e.target.value });
  };

  render() {
    return (
      <div className={'container'}>
        <ImageUpload handleChange={this.handleChange} />
        <div style={{ padding: '10px' }}>
          <UnitPicker
            handleChange={this.setUnits}
            active={this.state.units}
            mouseUpFunction={this.setUnits}
          />
        </div>
        <div style={{ padding: '10px' }}>
          <input
            type="number"
            id="customkm"
            name="customkm"
            onChange={this.selectRace}
            placeholder={
              this.state.units === 'metric'
                ? 'Run length in km'
                : 'Run length in miles'
            }
          />
          <label htmlFor="customkm">kilometers</label>
        </div>
        <form>
          <RangeInput
            name="hours"
            label="hours"
            value={this.state.finisherTime.hours}
            min={0}
            max={24}
            handleChange={this.setFinisherTime}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength > 0 ? false : true}
          />
          <RangeInput
            name="minutes"
            label="minutes"
            value={this.state.finisherTime.minutes}
            min={0}
            max={59}
            handleChange={this.setFinisherTime}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength > 0 ? false : true}
          />
          <RangeInput
            name="seconds"
            label="seconds"
            value={this.state.finisherTime.seconds}
            min={0}
            max={59}
            handleChange={this.setFinisherTime}
            mouseUpFunction={this.onAfterChange}
            active={this.state.raceLength > 0 ? false : true}
          />
        </form>
        <ShareImage
          imageUrl={this.state.image}
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

export default ImageGeneratorPage;
