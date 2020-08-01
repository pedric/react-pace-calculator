import React from 'react';

export default function ResultsMonitor(props) {
  const styles = {
    padding: '10px',
  };
  const blue = {
    color: '#2196f3',
  };

  return (
    <div className={'f4'}>
      <div style={styles}>
        <span className={props.name ? 'f2' : 'f6'}>
          {props.name ? props.name : 'Pick a race type above'}
        </span>
      </div>
      <div style={styles}>
        <span className={'f6'}>Finisher time:</span>
        <div className={'f3'}>
          <span style={blue}>{props.finisherHours} : </span>
          <span style={blue}>{props.finisherMinutes} : </span>
          <span style={blue}>{props.finisherSeconds}</span>
        </div>
      </div>
      <div style={styles}>
        <span className={'f6'}>Awerage pace:</span>
        <div className={'f3'}>
          <span style={blue}>{props.paceMinutesPerKm} : </span>
          <span style={blue}>{props.paceSecondsPerKm}</span>
          <span className={'f6'}> (min/km)</span>
        </div>
      </div>
      <div style={styles}>
        <div className={'f3'}>
          <span style={blue}>{props.paceMinutesPerMiles} : </span>
          <span style={blue}>{props.paceSecondsPerMiles}</span>
          <span className={'f6'}> (min/miles)</span>
        </div>
      </div>
    </div>
  );
}
