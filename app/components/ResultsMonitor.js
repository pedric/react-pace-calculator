import React from 'react';

export default function ResultsMonitor(props) {
  const styles = {
    padding: '10px',
  };

  return (
    <div style={{ textAlign: 'center' }} className={'f4'}>
      <div style={styles}>
        <span>{props.name}</span>
      </div>
      <div style={styles}>
        <span>time: </span>
        <span>{props.finisherHours} : </span>
        <span>{props.finisherMinutes} : </span>
        <span>{props.finisherSeconds}</span>
      </div>
      <div style={styles}>
        <span>pace: </span>
        <span>{props.paceMinutesPerKm} : </span>
        <span>{props.paceSecondsPerKm}</span>
        <span> (min/km)</span>
      </div>
      <div style={styles}>
        <span>pace: </span>
        <span>{props.paceMinutesPerMiles} : </span>
        <span>{props.paceSecondsPerMiles}</span>
        <span> (min/miles)</span>
      </div>
    </div>
  );
}
