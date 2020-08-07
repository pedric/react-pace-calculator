import React, { useState } from 'react';
// see code in comments to use the useState hook
export default function UnitPicker(props) {
  // const [active, setActive] = useState('metric');
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  return (
    <form style={wrapperStyles}>
      <span>
        <input
          onChange={props.handleChange}
          // onClick={() => setActive('metric')}
          type="radio"
          id="metric"
          name="units"
          value="metric"
          checked={props.active == 'metric' ? true : false}
        />
        <label htmlFor="metric">km/min</label>
      </span>
      <span>
        <input
          onChange={props.handleChange}
          // onClick={() => setActive('imperial')}
          type="radio"
          id="miles"
          name="units"
          value="imperial"
          checked={props.active == 'imperial' ? true : false}
        />
        <label htmlFor="miles">miles/min</label>
      </span>
    </form>
  );
}
