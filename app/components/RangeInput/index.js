import React from 'react';
import Div from './styles';

export default function RangeInput(props) {
  const inputStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Div
      className={`input_wrapper ${props.active ? '' : 'input_wrapper--active'}`}
    >
      <div className={props.active ? 'notice' : 'notice  hidden'}>
        You must set distance before you can enter {props.label}
      </div>
      <div className={'input_wrapper__label'}>
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
    </Div>
  );
}
