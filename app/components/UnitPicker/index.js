import React, { useState } from 'react';
import Form from './styles';
// see code in comments to use the useState hook
export default function UnitPicker(props) {
  // const [active, setActive] = useState('metric');
  return (
    <Form className={'unit_picker'}>
      <span
        className={
          props.active == 'metric'
            ? 'unit_picker__radio-wrapper unit_picker__radio-wrapper--active'
            : 'unit_picker__radio-wrapper'
        }
      >
        <input
          className={'unit_picker__input'}
          onChange={props.handleChange}
          // onClick={() => setActive('metric')}
          type="radio"
          id="metric"
          name="units"
          value="metric"
          checked={props.active == 'metric' ? true : false}
          onMouseUp={props.mouseUpFunction}
          onTouchEnd={props.mouseUpFunction}
        />
        <label
          className={'unit_picker__label'}
          htmlFor="metric"
          onMouseUp={props.mouseUpFunction}
          onTouchEnd={props.mouseUpFunction}
        >
          {props.metricLabel}
        </label>
      </span>
      <span
        className={
          props.active == 'imperial'
            ? 'unit_picker__radio-wrapper unit_picker__radio-wrapper--active'
            : 'unit_picker__radio-wrapper'
        }
      >
        <input
          className={'unit_picker__input'}
          onChange={props.handleChange}
          // onClick={() => setActive('imperial')}
          type="radio"
          id="miles"
          name="units"
          value="imperial"
          checked={props.active == 'imperial' ? true : false}
          onMouseUp={props.mouseUpFunction}
          onTouchEnd={props.mouseUpFunction}
        />
        <label
          className={'unit_picker__label'}
          htmlFor="miles"
          onMouseUp={props.mouseUpFunction}
          onTouchEnd={props.mouseUpFunction}
        >
          {props.imperialLabel}
        </label>
      </span>
    </Form>
  );
}
