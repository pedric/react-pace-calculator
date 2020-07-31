import React from 'react';

export default function RangeInput(props) {
  const styles = {
    padding: '10px',
  };

  return (
    <div style={styles}>
      <input
        type="range"
        key={props.name}
        id={props.name}
        name={props.name}
        defaultValue={props.value}
        min={props.min}
        max={props.max}
        step={1}
        onChange={props.handleChange}
        onMouseUp={props.handleChange}
      />
    </div>
  );
}
