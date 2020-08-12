import React from 'react';

export default function ResultsMonitor(props) {
  const styles = {
    padding: '10px',
  };
  const wrapperStyles = {
    fontFamily: 'Roboto Mono',
  };

  return (
    <div className={'f4'} style={wrapperStyles}>
      <div style={styles}>
        <span className={props.name ? 'f2 theme_color' : 'f6'}>
          {props.name ? props.name : 'Pick a race type above'}
        </span>
      </div>
      <div style={styles}>
        <span className={'f6'}>Finisher time:</span>
        <div className={'f3'}>
          <span className={'theme_color'}>{props.finisherHours}</span>
          <span>:</span>
          <span className={'theme_color'}>{props.finisherMinutes}</span>
          <span>:</span>
          <span className={'theme_color'}>{props.finisherSeconds}</span>
        </div>
      </div>
      <div style={styles}>
        <span className={'f6'}>Pace:</span>
        <div className={'f3'}>
          <span className={'theme_color'}>{props.paceMinutesPerKm}</span>
          <span>:</span>
          <span className={'theme_color'}>{props.paceSecondsPerKm}</span>
          <span className={'f6'}> (min/km)</span>
        </div>
      </div>
      <div style={styles}>
        <div className={'f3'}>
          <span className={'theme_color'}>{props.paceMinutesPerMiles}</span>
          <span>:</span>
          <span className={'theme_color'}>{props.paceSecondsPerMiles}</span>
          <span className={'f6'}> (min/mi)</span>
        </div>
      </div>
    </div>
  );
}
