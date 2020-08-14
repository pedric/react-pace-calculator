import React from 'react';
import Button from './styles';
import {
  themeColor,
  themeComplementaryColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';

export default function FontButton(props) {
  return (
    <Button
      key={props.name}
      value={props.name}
      onClick={() => props.handleClick(props.name)}
      className={'font_menu__button font_menu__button--' + props.name}
      className={
        props.name === props.active
          ? 'active font_menu__button font_menu__button--' + props.name
          : 'font_menu__button font_menu__button--' + props.name
      }
    >
      <span style={{ fontFamily: props.name }}>T</span>
    </Button>
  );
}
