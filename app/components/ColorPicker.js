import React from 'react';

export default function ColorPicker(props) {
  const buttons = props.colors.map(color => (
    <button
      key={color}
      style={{ backgroundColor: color }}
      value={color}
      className={'round_button'}
      onClick={props.handleChange}
    >
      color
    </button>
  ));
  return (
    <div style={{ padding: '10px' }}>
      {/* <p>{props.label}</p> */}
      {buttons}
    </div>
  );
}
