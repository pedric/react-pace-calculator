import { createGlobalStyle } from 'styled-components';

// const clockIcon = require('images/icons/clock.svg');
import {
  themeColor,
  themeComplementaryColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Quicksand', Orbitron, Helvetica, Arial, sans-serif;
    color: #000;
  }

  body.fontLoaded {
    font-family: 'Quicksand', Orbitron, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p {
    line-height: 1.5em;
  }

  label {
    font-family: "Quicksand",Orbitron,Helvetica,Arial,sans-serif;
  }

  .font_menu,
  .align_menu,
  .tab_menu {
    margin: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .font_menu__button {
    position: relative
      padding: 4px;
      font-size: 20px;
      border: none;
      background: none;
      cursor: pointer;
      transition: transform 250ms ease-in-out;
      
      &.active {
        color: ${themeComplementaryColor};
      }
  }

  .tab_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    padding: 10px;
  }

  .btn {
    display: block;
    background: ${themeLight};
    border: 2px solid ${themeColor};
    padding: 6px 12px;
    border-radius: 16px;
    color: ${themeColor};
    transform: scale(1.0);
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:hover {
      background: ${themeColor};
      color: ${themeLight};
      transform: scale(1.05);
    }
  }

  .visibility_hidden {
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
    top: -999px;
    left: -999px;
  }

  .theme_color {
    color: ${themeColor};
  }

  .theme_bg {
    background-color: ${themeColor};
  }

  .container {
    width: 100%;
    max-width: 660px;
    margin: 0 auto;
    padding: 5px;
    padding-top: 80px;
  }

  select#races {
    width: 100%;
    padding: 6px;
    background: #ececec;
    border-radius: 4px;
    border: 1px solid ${themeColor};
  }

  .custom_title_input,
  .custom_distance_input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid ${themeLightGray};
  }

  // div#hidden_monitor {
  //   background-size: cover;
  //   background-position: center;
  //   position: fixed;
  //   height: 650px;
  //   width: 650px;
  //   top: 9999px;
  //   overflow: hidden;
  //   left: 9999px;
  //   z-index: -1;
  // }
`;

export default GlobalStyle;
