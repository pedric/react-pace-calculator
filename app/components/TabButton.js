import React from 'react';
import {
  themeColor,
  themeComplementaryColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';

export default function TabButton(props) {
  // console.log(props);
  let icon = props.name;
  if (props.name === 'time') {
    icon = (
      <svg
        className={
          props.name === props.activeTab
            ? 'tab_menu__icon active'
            : 'tab_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50.35 50.35"
      >
        <g>
          <g>
            <circle cx="25.18" cy="25.18" r="22.68" />
            <polyline points="25.18 7.6 25.18 25.18 32.82 32.82" />
          </g>
        </g>
      </svg>
    );
  }
  if (props.name === 'image') {
    icon = (
      <svg
        className={
          props.name === props.activeTab
            ? 'tab_menu__icon active'
            : 'tab_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50.4 50.4"
      >
        <g>
          <g>
            <path d="M43.8,47.9H6.6a4.06,4.06,0,0,1-4.1-4.1V6.6A4.06,4.06,0,0,1,6.6,2.5H43.8a4.06,4.06,0,0,1,4.1,4.1V43.8A4.06,4.06,0,0,1,43.8,47.9Z" />
            <path d="M24,42.2c-1.4-2.1-11.92-3.9-2.92-8.8" />
            <path d="M39.5,39.9c-1.8-.7-8.6.9-15.5-9.3,0,0-3.7-10.2-3.2-11.8" />
            <path d="M17.59,24.09s-4.11.69-6.61-.61" />
            <path d="M26.5,19.6c1.4,0,10.51-.32,3.14,8.27" />
            <circle cx="20.8" cy="12.2" r="2.6" />
          </g>
        </g>
      </svg>
    );
  }
  if (props.name === 'units') {
    icon = (
      <svg
        className={
          props.name === props.activeTab
            ? 'tab_menu__icon active'
            : 'tab_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.13 45.31"
      >
        <g>
          <g>
            <line x1="2.21" y1="12.72" x2="34.48" y2="12.72" />
            <line x1="22.5" y1="1.77" x2="35.13" y2="14.39" />
            <line x1="22.74" y1="23.68" x2="35.36" y2="11.05" />
            <line x1="34.92" y1="32.59" x2="2.65" y2="32.59" />
            <line x1="14.63" y1="43.54" x2="2" y2="30.92" />
            <line x1="14.39" y1="21.64" x2="1.77" y2="34.26" />
          </g>
        </g>
      </svg>
    );
  }
  if (props.name === 'text') {
    icon = (
      <svg
        className={
          props.name === props.activeTab
            ? 'tab_menu__icon active'
            : 'tab_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 29.43 21.88"
      >
        <g>
          <g>
            <line y1="2.5" x2="29.43" y2="2.5" />
            <line y1="10.94" x2="29.43" y2="10.94" />
            <line y1="19.38" x2="21.93" y2="19.38" />
          </g>
        </g>
      </svg>
    );
  }
  if (props.name === 'distance') {
    icon = (
      <svg
        className={
          props.name === props.activeTab
            ? 'tab_menu__icon active'
            : 'tab_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 73.4 28.92"
      >
        <g>
          <g>
            <circle cx="63.8" cy="12" r="7.1" />
            <circle cx="10.5" cy="10.5" r="8" />
            <path d="M15.9,16.4a14.78,14.78,0,0,1,.9,2.3" />
            <path
              style={{ strokeDasharray: '4.65 4.65' }}
              d="M18.7,23c2,3.3,5.5,5.5,11.2.4C39.5,14.8,42.2,5.1,54.4,8.2"
            />
            <path d="M56.6,8.9c.7.3,1.5.6,2.3.9" />
          </g>
        </g>
      </svg>
    );
  }
  if (props.name === 'color') {
    icon = (
      <svg
        className={
          props.name === props.activeTab
            ? 'tab_menu__icon active'
            : 'tab_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48.86 55.05"
      >
        <g>
          <g>
            <path d="M2.56,50.16s-1-9.44,4.92-10.75,12,1.36,7.87,6-9.67,5.71-10.63,9" />
            <path d="M15.16,35.34C16.32,33.19,41.36.4,45.26,2.61S42.16,12.4,34,20.7c-8.54,7.89-9.31,9-17,15.17" />
          </g>
        </g>
      </svg>
    );
  }
  if (props.name === 'download') {
    icon = (
      <svg
        className={
          props.name === props.activeTab
            ? 'tab_menu__icon active'
            : 'tab_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50.4 44.62"
      >
        <g>
          <g>
            <path d="M47.9,28.8V38a4.26,4.26,0,0,1-4.1,4.1H6.6A4.06,4.06,0,0,1,2.5,38V28.8" />
            <line x1="23.98" x2="23.98" y2="32.27" />
            <line x1="34.94" y1="20.29" x2="22.31" y2="32.92" />
            <line x1="13.03" y1="20.53" x2="25.65" y2="33.15" />
          </g>
        </g>
      </svg>
    );
  }
  return (
    <button
      key={props.name}
      value={props.name}
      onClick={() => props.handleClick(props.name)}
      className={'tab_menu__button tab_menu__button--' + props.name}
      className={
        props.name === props.activeTab
          ? 'active tab_menu__button tab_menu__button--' + props.name
          : 'tab_menu__button tab_menu__button--' + props.name
      }
    >
      {icon}
      <span className={'tab_menu__title'}>{props.name}</span>
    </button>
  );
}
