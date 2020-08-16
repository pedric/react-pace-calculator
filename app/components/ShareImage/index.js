import React from 'react';
import Div from './styles';

export default function ShareImage(props) {
  const styles = {
    padding: '10px',
  };
  const wrapperStyles = {
    backgroundImage: 'url(' + props.imageUrl + ')',
    color: props.color,
    fontFamily: props.font,
    letterSpacing: '0.5px',
    textAlign: props.align,
  };

  let label = props.name;
  let units = props.units === 'metric' ? 'km' : 'miles';
  label = label + units;

  return (
    <Div id={props.modifier} className={props.classes} style={wrapperStyles}>
      <div style={{ background: props.overlay }} className={'color_filter'} />
      <div style={{ padding: '32px' }}>
        <div
          style={styles}
          className={props.customTitle ? '' : 'visibility_hidden'}
        >
          <span className={props.customTitle ? 'f2' : 'f6'}>
            {props.customTitle}
          </span>
        </div>
        <div style={styles}>
          <span className={props.name ? 'f2' : 'visibility_hidden  f6'}>
            {label}
          </span>
        </div>
        <div style={styles}>
          <span className={'f6'}>Time:</span>
          <div className={'f3'}>
            <span className={'f2'}>{props.finisherHours}</span>
            <span className={'f6'}>h</span>
            <span>:</span>
            <span className={'f2'}>{props.finisherMinutes}</span>
            <span className={'f6'}>m</span>
            <span>:</span>
            <span className={'f2'}>{props.finisherSeconds}</span>
            <span className={'f6'}>s</span>
          </div>
        </div>
        <div style={styles}>
          <span className={'f6'}>Pace:</span>
          <div className={'f3'}>
            <span className={'f2'}>{props.paceMinutesPerKm}</span>
            <span>:</span>
            <span className={'f2'}>{props.paceSecondsPerKm}</span>
            <span className={'f6'}> (min/km)</span>
          </div>
        </div>
        <div style={styles}>
          <div className={'f3'}>
            <span className={'f2'}>{props.paceMinutesPerMiles}</span>
            <span>:</span>
            <span className={'f2'}>{props.paceSecondsPerMiles}</span>
            <span className={'f6'}> (min/mi)</span>
          </div>
        </div>
      </div>
    </Div>
  );
}
