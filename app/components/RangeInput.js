import React from 'react';

export default function RangeInput(props) {
  const wrapperStyles = {
    padding: '10px',
  };

  const inputStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div
      className={`input_wrapper ${props.active ? '' : 'input_wrapper--active'}`}
      style={wrapperStyles}
    >
      <div style={{ textAlign: 'center' }}>
        {props.value}
        <span className={'f6'}> {props.label}</span>
      </div>
      <div style={inputStyles}>
        <span>{props.min}</span>
        <input
          type="range"
          key={props.name}
          id={props.name}
          name={props.name}
          value={props.value}
          min={props.min}
          max={props.max}
          step={1}
          onChange={props.handleChange}
          onMouseUp={props.mouseUpFunction}
          onTouchEnd={props.mouseUpFunction}
          disabled={props.active}
        />
        <span>{props.max}</span>
      </div>
    </div>
  );
}
