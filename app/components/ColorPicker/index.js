import React from 'react';
import Button from './styles';

export default function ColorPicker(props) {
  const buttons = props.colors.map(color => (
    <Button
      key={color}
      style={{ backgroundColor: color }}
      value={color}
      className={'round_button'}
      onClick={props.handleChange}
    >
      color
    </Button>
  ));
  return (
    <div style={{ padding: '10px' }}>
      <p style={{ textAlign: 'center' }}>{props.label}</p>
      {buttons}
    </div>
  );
}
