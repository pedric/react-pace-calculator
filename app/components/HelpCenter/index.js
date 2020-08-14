import React, { useState } from 'react';
import Div from './styles';
import {
  themeColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';
import Icon from 'components/Icon';

export default function HelpCenter(props) {
  let [activeMenu, toggleMenu] = useState(false);

  return (
    <Div className={'helpcenter'}>
      <Icon className={'helpcenter__logo'} />
      <h1>Larsåns running pace calculator</h1>
      <button
        key={'helpcenter_button'}
        className={'helpcenter__button'}
        onClick={() => toggleMenu((activeMenu = !activeMenu))}
      >
        {activeMenu ? '.' : 'M'}
      </button>
      <aside
        className={activeMenu ? 'helpcenter__info active' : 'helpcenter__info'}
      >
        <h2>Time calculator</h2>
        <p>info ...</p>
        <h2>Pace calculator</h2>
        <p>info ...</p>
        <h2>Image generator</h2>
        <p>info ...</p>
      </aside>
    </Div>
  );
}
