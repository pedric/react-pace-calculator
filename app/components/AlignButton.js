import React from 'react';
import {
  themeColor,
  themeComplementaryColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';

export default function AlignButton(props) {
  // console.log(props);
  let icon = props.name;
  if (props.name === 'left') {
    icon = (
      <svg
        className={
          props.name === props.active
            ? 'align_menu__icon active'
            : 'align_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="17" y1="10" x2="3" y2="10" />
        <line x1="21" y1="6" x2="3" y2="6" />
        <line x1="21" y1="14" x2="3" y2="14" />
        <line x1="17" y1="18" x2="3" y2="18" />
      </svg>
    );
  }
  if (props.name === 'center') {
    icon = (
      <svg
        className={
          props.name === props.active
            ? 'align_menu__icon active'
            : 'align_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="10" x2="6" y2="10" />
        <line x1="21" y1="6" x2="3" y2="6" />
        <line x1="21" y1="14" x2="3" y2="14" />
        <line x1="18" y1="18" x2="6" y2="18" />
      </svg>
    );
  }
  if (props.name === 'right') {
    icon = (
      <svg
        className={
          props.name === props.active
            ? 'align_menu__icon active'
            : 'align_menu__icon'
        }
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="21" y1="10" x2="7" y2="10" />
        <line x1="21" y1="6" x2="3" y2="6" />
        <line x1="21" y1="14" x2="3" y2="14" />
        <line x1="21" y1="18" x2="7" y2="18" />
      </svg>
    );
  }

  return (
    <button
      key={props.name}
      value={props.name}
      onClick={() => props.handleClick(props.name)}
      className={'align_menu__button align_menu__button--' + props.name}
      className={
        props.name === props.active
          ? 'active align_menu__button align_menu__button--' + props.name
          : 'align_menu__button align_menu__button--' + props.name
      }
    >
      {icon}
      <span className={'align_menu__title'}>{props.name}</span>
    </button>
  );
}
