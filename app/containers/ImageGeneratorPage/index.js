/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import RangeInput from 'components/RangeInput';
import ImageUpload from 'components/ImageUpload';
import ShareImage from 'components/ShareImage';
import UnitPicker from 'components/UnitPicker';
import ColorPicker from 'components/ColorPicker';
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
    this.pickColor = this.pickColor.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.setCustomRaceTitle = this.setCustomRaceTitle.bind(this);
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
    // kolla om this.state.units är metric eller imperial
    // om imperial gör om raceLength till meter men race name som miles
    const lengthInput = parseInt(e.target.value * 1000);
    const length =
      this.state.units === 'metric'
        ? lengthInput
        : this.calculator.milesToMeters(lengthInput);
    const name = e.target.value;
    this.setState({
      raceLength: length,
      raceName: name,
    });
    this.setTimeInSeconds();
  };

  selectRaceFromOptions = e => {
    // const selectedOption = e.target.childNodes[e.target.selectedIndex];
    // const selectedRaceName = selectedOption.getAttribute('name');
    // ta bort 'm' från race name och konvertera från meter till km
    const lengthInput = (e.target.value / 1000).toFixed(1);
    // const length =
    //   this.state.units === 'metric'
    //     ? parseInt(e.target.value)
    //     : this.calculator.milesToMeters(e.target.value);
    const name =
      this.state.units === 'metric'
        ? lengthInput
        : this.calculator.metersToMiles(lengthInput).toFixed(2);
    this.setState({
      raceLength: parseInt(e.target.value),
      raceName: name,
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

  pickColor = e => {
    this.setState({ color: e.target.value });
  };

  saveImage = () => {
    console.log('trying to save image');
    const element = document.getElementById('hidden_monitor');
    const rect = element.getBoundingClientRect();
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    console.log(width, height);
    console.log(window.innerWidth, window.innerHeight);
    const today = new Date();
    let filename = today.getFullYear();
    filename +=
      '_' +
      today.getMonth() +
      '_' +
      today.getDate() +
      '_' +
      today.getHours() +
      today.getMinutes() +
      today.getSeconds() +
      '.png';
    console.log('file name: ', filename);
    html2canvas(element, {
      width: 650,
      height: 650,
      useCORS: true,
      taintTest: false,
      allowTaint: false,
      x: -9999,
      y: -9999,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
      .then(canvas => {
        canvas.toBlob(blob => {
          saveAs(blob, filename);
        });
      })
      .catch(err => {
        this.displayError(err);
      });
  };

  displayError = err => {
    // make UI component to handle err event
    console.log(err);
  };

  setCustomRaceTitle = e => {
    console.log('setting custom title: ', e.target.value);
    this.setState({ customRaceTitle: e.target.value });
  };

  render() {
    const raceOptions = this.state.raceTypes.map(race => (
      <option key={race.name} value={race.length} name={race.name}>
        {race.name}
      </option>
    ));
    return (
      <div className={'container'}>
        <ImageUpload handleChange={this.handleChange} />
        <div style={{ padding: '10px' }}>
          <UnitPicker
            handleChange={this.setUnits}
            active={this.state.units}
            mouseUpFunction={this.setUnits}
            metricLabel={'kilometers'}
            imperialLabel={'miles'}
          />
        </div>
        <div style={{ padding: '10px' }}>
          Select distance from the dropdown or enter it manually in the field
          below.
        </div>
        <div style={{ padding: '10px' }}>
          <select id="races" onChange={this.selectRaceFromOptions}>
            {raceOptions}
          </select>
        </div>
        <div style={{ padding: '10px' }}>
          <label htmlFor="customkm">
            {this.state.units === 'metric' ? 'Kilometers' : 'Miles'}
          </label>
          <br />
          <input
            className={'custom_distance_input'}
            type="number"
            id="customkm"
            name="customkm"
            onChange={this.selectRace}
            placeholder={
              this.state.units === 'metric' ? 'No of km' : 'No of miles'
            }
          />
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
        <div style={{ padding: '10px' }}>
          <label htmlFor="customTitle">
            Activity title <span className={'f6'}>(optional)</span>
          </label>
          <br />
          <input
            className={'custom_title_input'}
            type="text"
            placeholder="Activity title"
            id="customTitle"
            name="customTitle"
            onChange={this.setCustomRaceTitle}
          />
        </div>
        <ColorPicker
          label={'Text color options'}
          colors={this.state.colorOptions}
          handleChange={this.pickColor}
        />
        <div style={{ padding: '10px' }}>
          <button onClick={this.saveImage}>Save image</button>
        </div>
        <ShareImage
          customTitle={this.state.customRaceTitle}
          modifier={''}
          classes={'share_image f4'}
          color={this.state.color}
          imageUrl={this.state.image}
          name={this.state.raceName}
          units={this.state.units}
          distance={this.state.raceLength}
          finisherHours={this.state.finisherTime.hours}
          finisherMinutes={this.state.finisherTime.minutes}
          finisherSeconds={this.state.finisherTime.seconds}
          paceMinutesPerKm={this.state.pace.minutesPerKm}
          paceSecondsPerKm={this.state.pace.secondsPerKm}
          paceMinutesPerMiles={this.state.pace.minutesPerMiles}
          paceSecondsPerMiles={this.state.pace.secondsPerMiles}
        />
        <ShareImage
          customTitle={this.state.customRaceTitle}
          modifier={'hidden_monitor'}
          classes={'f4'}
          color={this.state.color}
          imageUrl={this.state.image}
          name={this.state.raceName}
          units={this.state.units}
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
