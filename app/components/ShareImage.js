import React from 'react';

export default function ShareImage(props) {
  const styles = {
    padding: '10px',
  };
  const bgImageStyle = {
    backgroundImage: 'url(' + props.imageUrl + ')',
  };

  return (
    <div className={'share_image f4'} style={bgImageStyle}>
      {/* <img src={props.imageUrl} /> */}
      <div style={styles}>
        <span className={props.name ? 'f2 theme_color' : 'f6'}>
          {props.name ? props.name : 'Set length of run above'}
        </span>
      </div>
      <div style={styles}>
        <span className={'f6'}>Time:</span>
        <div className={'f3'}>
          <span className={'theme_color'}>{props.finisherHours}</span>
          <span> : </span>
          <span className={'theme_color'}>{props.finisherMinutes}</span>
          <span> : </span>
          <span className={'theme_color'}>{props.finisherSeconds}</span>
        </div>
      </div>
      <div style={styles}>
        <span className={'f6'}>Pace:</span>
        <div className={'f3'}>
          <span className={'theme_color'}>{props.paceMinutesPerKm}</span>
          <span> : </span>
          <span className={'theme_color'}>{props.paceSecondsPerKm}</span>
          <span className={'f6'}> (min/km)</span>
        </div>
      </div>
      <div style={styles}>
        <div className={'f3'}>
          <span className={'theme_color'}>{props.paceMinutesPerMiles}</span>
          <span> : </span>
          <span className={'theme_color'}>{props.paceSecondsPerMiles}</span>
          <span className={'f6'}> (min/mi)</span>
        </div>
      </div>
    </div>
  );
}
