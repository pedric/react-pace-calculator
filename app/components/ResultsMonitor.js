import React from 'react';

export default function ResultsMonitor(props) {
  return (
    <div>
      <div>
        time -<span>{props.finisherHours} : </span>
        <span>{props.finisherMinutes} : </span>
        <span>{props.finisherSeconds}</span>
      </div>
      <div>
        pace -<span>{props.paceMinutes} : </span>
        <span>{props.paceSeconds}</span>
      </div>
    </div>
  );
}
