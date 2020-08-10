import React, { useState } from 'react';
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
  const btnStyles = {
    backgroundColor: themeLight,
    color: themeColor,
    padding: '0 0 0 1px',
    margin: '0',
    fontSize: '11px',
    width: '16px',
    height: '16px',
    position: 'absolute',
    top: '8px',
    right: '16px',
    zIndex: '999',
  };
  const headingStyles = {
    textAlign: 'center',
    fontSize: '12px',
    color: themeLight,
    fontWeight: '400',
  };

  return (
    <div className={'helpcenter'}>
      <Icon className={'helpcenter__logo'} />
      <h1 style={headingStyles}>Larsåns running pace calculator</h1>
      <button
        key={'helpcenter_button'}
        style={btnStyles}
        className={'helpcenter__button round_button'}
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
    </div>
  );
}
