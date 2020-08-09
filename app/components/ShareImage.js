import React from 'react';

export default function ShareImage(props) {
  const styles = {
    padding: '10px',
  };
  const bgImageStyle = {
    backgroundImage: 'url(' + props.imageUrl + ')',
    color: props.color,
  };

  let label = props.name ? props.name : 'Set length of run above';
  let units = props.units === 'metric' ? 'km' : 'miles';
  label = label + units;

  return (
    <div id={props.modifier} className={props.classes} style={bgImageStyle}>
      {/* <img
        src={props.imageUrl}
        className={'share_image__image'}
        id={'share_image__image'}
      /> */}
      <div style={styles}>
        <span className={props.name ? 'f2 theme_color' : 'f6'}>{label}</span>
      </div>
      <div style={styles}>
        <span className={'f6'}>Time:</span>
        <div className={'f3'}>
          <span>{props.finisherHours}</span>
          <span> : </span>
          <span>{props.finisherMinutes}</span>
          <span> : </span>
          <span>{props.finisherSeconds}</span>
        </div>
      </div>
      <div style={styles}>
        <span className={'f6'}>Pace:</span>
        <div className={'f3'}>
          <span>{props.paceMinutesPerKm}</span>
          <span> : </span>
          <span>{props.paceSecondsPerKm}</span>
          <span className={'f6'}> (min/km)</span>
        </div>
      </div>
      <div style={styles}>
        <div className={'f3'}>
          <span>{props.paceMinutesPerMiles}</span>
          <span> : </span>
          <span>{props.paceSecondsPerMiles}</span>
          <span className={'f6'}> (min/mi)</span>
        </div>
      </div>
    </div>
  );
}
