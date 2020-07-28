import React from 'react';

export default function RangeInput(props) {
  return (
    <input
      type="range"
      key={props.name}
      id={props.name}
      name={props.name}
      value={props.value}
      min={props.min}
      max={props.max}
      step={1}
      onChange={props.handler}
    />
  );
}
