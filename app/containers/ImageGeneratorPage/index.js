import React from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import RangeInput from 'components/RangeInput/index';
import ImageUpload from 'components/ImageUpload/index';
import ShareImage from 'components/ShareImage/index';
import UnitPicker from 'components/UnitPicker/index';
import ColorPicker from 'components/ColorPicker/index';
import AlignButton from 'components/AlignButton/index';
import FontButton from 'components/FontButton/index';
import TabButton from 'components/TabButton/index';
import ApiImageCollection from 'components/ApiImageCollection/index';
import RunningData from 'data/data';
import Calculator from 'classes/Calculator';
import ApiHandler from 'classes/ApiHandler';
import { last } from 'lodash';

class ImageGeneratorPage extends React.Component {
  constructor() {
    super();
    this.state = { ...RunningData };
    this.setFinisherTime = this.setFinisherTime.bind(this);
    this.setTimeInSeconds = this.setTimeInSeconds.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.pickColor = this.pickColor.bind(this);
    this.setOverlay = this.setOverlay.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);
    this.setCustomRaceTitle = this.setCustomRaceTitle.bind(this);
    this.callApi = this.callApi.bind(this);
    this.setImageFromApi = this.setImageFromApi.bind(this);
    this.updateDb = this.updateDb.bind(this);
    this.calculator = new Calculator();
    this.ApiHandler = new ApiHandler();
  }

  handleChange = e => {
    const url = URL.createObjectURL(e.target.files[0]);
    this.setState({ image: url });
  };

  setImageFromApi = url => {
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

  componentWillMount() {
    const imageEditor = { ...this.state.imageEditor };
    imageEditor.activeTab = 'image';
    this.setState({ imageEditor });
    this.callApi();
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

  setOverlay = e => {
    this.setState({ overlay: e.target.value });
  };

  saveImage = () => {
    const element = document.getElementById('hidden_monitor');
    const rect = element.getBoundingClientRect();
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
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
      x: 9999,
      y: 9999,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      scrollX: 0,
      scrollY: 0,
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

  setActiveTab = tab => {
    const imageEditor = { ...this.state.imageEditor };
    imageEditor.activeTab = tab;
    this.setState({ imageEditor });
  };

  setAlign = align => {
    console.log(align);
    const textAlign = { ...this.state.textAlign };
    textAlign.active = align;
    this.setState({ textAlign });
  };

  setFont = font => {
    const fontChoice = { ...this.state.fontChoice };
    fontChoice.active = font;
    this.setState({ fontChoice });
  };

  async callApi() {
    const twentyFourHoursInSeconds = 60 * 60 * 24;
    const now = new Date().getTime();
    let last_update = this.ApiHandler.getLastUpdate();

    // if (now > last_update + twentyFourHoursInSeconds) {
    if (true) {
      let client_id = process.env.CLIENT_ID ? process.env.CLIENT_ID : false;
      if (!client_id) {
        await fetch(`${window.location.origin}/api/unsplash/uid`)
          .then(response => response.json())
          .then(data => (client_id = data.id))
          .catch(err => console.log(err));
      }

      this.ApiHandler.updateCacheTimeStamp(last_update.id);
      this.ApiHandler.clearImagesCollection();
      let cleanArray = [];
      await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=running&page=1&per_page=30&content_filter=high`,
      )
        .then(response => response.json())
        .then(data =>
          data.results.forEach(element => {
            cleanArray.push(element.urls);
          }),
        )
        .then(data => this.setState({ apiResponse: cleanArray }))
        .then(data => this.updateDb(cleanArray))
        .catch(err => console.log(err));
    } else {
      await fetch(window.location.origin + '/api/unsplash')
        .then(response => response.json())
        .then(data => this.setState({ apiResponse: data }))
        .catch(err => console.log(err));
    }

    // await this.updateDb(cleanArray);
  }

  async updateDb(data) {
    this.ApiHandler.updateImagesCollection(data);
    // console.log('trying to update db with: ', data);
    // await fetch('http://localhost:3000/api/unsplash', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   mode: 'cors',
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(data),
    // });
  }

  componentDidMount() {
    // this.callApi();
    // this.updateDb();
  }

  render() {
    const raceOptions = this.state.raceTypes.map(race => (
      <option key={race.name} value={race.length} name={race.name}>
        {race.name}
      </option>
    ));
    const tabs = this.state.imageEditor.nav.map(name => (
      <TabButton
        key={name}
        name={name}
        handleClick={this.setActiveTab}
        activeTab={this.state.imageEditor.activeTab}
      />
    ));
    const alignChoices = this.state.textAlign.nav.map(name => (
      <AlignButton
        key={name}
        name={name}
        handleClick={this.setAlign}
        active={this.state.textAlign.active}
      />
    ));
    const fontChoices = this.state.fontChoice.nav.map(name => (
      <FontButton
        key={name}
        name={name}
        handleClick={this.setFont}
        active={this.state.fontChoice.active}
      />
    ));
    return (
      <div className={'container'}>
        <div className={'share_image'}>
          <ShareImage
            customTitle={this.state.customRaceTitle}
            modifier={''}
            classes={'share_image f4'}
            align={this.state.textAlign.active}
            color={this.state.color}
            overlay={this.state.overlay}
            font={this.state.fontChoice.active}
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
            align={this.state.textAlign.active}
            color={this.state.color}
            overlay={this.state.overlay}
            font={this.state.fontChoice.active}
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
        <div>
          <nav className={'tab_menu'}>{tabs}</nav>
        </div>
        <div className={'edit_controls'}>
          <div
            className={'tab_container'}
            style={
              this.state.imageEditor.activeTab === 'image'
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <ImageUpload
              handleChange={this.handleChange}
              status={this.state.image}
            />
            <ApiImageCollection
              items={this.state.apiResponse}
              handleChange={this.setImageFromApi}
            />
          </div>
          <div
            className={'tab_container'}
            style={
              this.state.imageEditor.activeTab === 'units'
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <div style={{ width: '100%' }}>
              <UnitPicker
                handleChange={this.setUnits}
                active={this.state.units}
                mouseUpFunction={this.setUnits}
                metricLabel={'kilometers'}
                imperialLabel={'miles'}
              />
            </div>
          </div>
          <div
            className={'tab_container'}
            style={
              this.state.imageEditor.activeTab === 'distance'
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <div>
              Select distance from the dropdown or enter it manually in the
              field below.
              <div style={{ padding: '16px 0' }}>
                <select id="races" onChange={this.selectRaceFromOptions}>
                  {raceOptions}
                </select>
              </div>
              <div style={{ padding: '16px 0' }}>
                <label htmlFor="customkm">
                  Disance in{' '}
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
            </div>
          </div>
          <div
            className={'tab_container'}
            style={
              this.state.imageEditor.activeTab === 'time'
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <div style={{ width: '100%' }}>
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
            </div>
          </div>
          <div
            className={'tab_container'}
            style={
              this.state.imageEditor.activeTab === 'text'
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <div>
              <div>
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
              <div>
                <nav className={'align_menu'}>{alignChoices}</nav>
                <nav className={'font_menu'}>{fontChoices}</nav>
              </div>
            </div>
          </div>
          <div
            className={'tab_container'}
            style={
              this.state.imageEditor.activeTab === 'color'
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <div>
              <ColorPicker
                label={'Text color'}
                colors={this.state.colorOptions}
                handleChange={this.pickColor}
              />
              <ColorPicker
                label={'Overlay color'}
                colors={this.state.overLayColorOptions}
                handleChange={this.setOverlay}
              />
            </div>
          </div>
          <div
            className={'tab_container'}
            style={
              this.state.imageEditor.activeTab === 'download'
                ? { display: 'flex' }
                : { display: 'none' }
            }
          >
            <div>
              <div style={{ marginBottom: '8px', textAlign: 'center' }}>
                Ready?
              </div>
              <button
                className={'btn'}
                onClick={this.saveImage}
                // style={
                //   this.state.image
                //     ? { display: 'inline-block' }
                //     : { display: 'none' }
                // }
              >
                Download image
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGeneratorPage;
