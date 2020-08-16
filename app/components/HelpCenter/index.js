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
        {activeMenu ? 'CLOSE' : 'M'}
      </button>
      <aside
        className={activeMenu ? 'helpcenter__info active' : 'helpcenter__info'}
      >
        <h2>
          <span className={'f4'}>The</span>
          <a href="/">Time calculator</a>
        </h2>
        <p>
          will help you find the average pace needed to reach a finisher time on
          a given distance.
        </p>
        <h2>
          <span className={'f4'}>The</span>
          <a href="/">Pace calculator</a>
        </h2>
        <p>
          Will give you the opposite of above, you enter distance and average
          pace which will give you the expected finisher time.
        </p>
        <h2>
          <span className={'f4'}>The</span>
          <a href="/image-generator">Image generator</a>
        </h2>
        <p>
          This is a tool in which you can generate an image with race title,
          distance and average pace printed on it. When you are done you can
          download it to your device and it's ready to share with your friends
          and followers.
        </p>
      </aside>
    </Div>
  );
}
