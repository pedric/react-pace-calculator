import React from 'react';

export default function ResultsMonitor(props) {
  const styles = {
    padding: '10px',
  };

  return (
    <div>
      <div style={styles}>
        time -<span>{props.finisherHours} : </span>
        <span>{props.finisherMinutes} : </span>
        <span>{props.finisherSeconds}</span>
      </div>
      <div style={styles}>
        pace -<span>{props.paceMinutes} : </span>
        <span>{props.paceSeconds}</span>
      </div>
    </div>
  );
}
