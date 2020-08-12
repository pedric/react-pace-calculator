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

  p,
  label {
    font-family: "Quicksand",Orbitron,Helvetica,Arial,sans-serif;
    line-height: 1.5em;
  }

  .align_menu,
  .tab_menu {
    margin: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .align_menu__button,
    .tab_menu__button {
      position: relative
      padding: 4px;
      // width: 30px;
      // height: 30px;
      border: none;
      background: none;
      cursor: pointer;
      transition: transform 250ms ease-in-out;

      .align_menu__title,
      .tab_menu__title {
        display: none;
        font-size: 14px;
      }

      &:focus {
        outline: 2px dashed ${themeLightGray};
      }

      &:first-child {
        &:hover {
          .tab_menu__title {
            left: 0;
            transform: translateX(0%);
          }
        }
      }
      
      &:last-child {
        &:hover {
          .tab_menu__title {
            left: unset;
            right: 0;
            transform: translateX(0%);
          }
        }
      }

      &:hover {
        transform: scale(1.3);
        .tab_menu__title {
          position: absolute;
          display: inline-block;
          width: fit-content;
          word-break: keep-all;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: ${themeColor};
          color: ${themeLight};
          padding: 4px;
          border-radius: 4px;
        }
      }

      svg.tab_menu__icon {
        width: 20px;
        height: 20px;
        fill:none;
        stroke: ${themeGray};
        stroke-miterlimit:10;
        stroke-width:5px;

        &.active {
          stroke: ${themeComplementaryColor};
        }

        &:hover {
          stroke: ${themeColor};
        }
      }

      svg.align_menu__icon {
        width: 20px;
        height: 20px;
        fill:none;
        stroke: ${themeGray};
        stroke-miterlimit:10;
        stroke-width:2px;

        &.active {
          stroke: ${themeComplementaryColor};
        }

        &:hover {
          stroke: ${themeColor};
        }
      }
    }
  }

  .tab_container {
    display: flex;
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

  .menu_btn {
    background: ${themeLight};
    color: ${themeColor};
    text-align: center;
    padding: 15px 5px;
    width: 100%;
    line-height: 0;
    display: block;
    font-size: 12px;
    text-decoration: none;

    &:hover {
      background: ${themeLightGray};
    }
  }

  .helpcenter {
    background-color: ${themeColor}; 
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;

    .helpcenter__button {
      &:focus {
        outline: none;
      }
    }

    .helpcenter__info {
      background-color: ${themeColor};
      color: ${themeLight};
      padding: 0px;
      width: 0%;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 998;
      transition: width 250ms ease-in-out;

      &.active {
        width: 90%;
        padding: 20px;
      }
    }
  }

  .unit_picker {
    .unit_picker__radio-wrapper{
      display: inline-block;
      // width: 50%;
      width: 100%;
      margin: 4px;

      &--active {
        background-color: ${themeLightGray};
    
        .unit_picker__label {
          color: ${themeColor};
          &:after {
            background: ${themeColor};
          }
        }
      }
    }

    .unit_picker__input {
      position: absolute;
      width: 0;
      height: 0;
      top: -9999px;
      left: -9999px;
    }

    .unit_picker__label {
      position: relative;
      display: block;
      padding: 4px;
      cursor: pointer;
      &:hover {
        background: ${themeGray};
      }
      &:after {
        content: '';
        position: absolute;
        top: 6px;
        right: 6px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background: ${themeLightGray};
      }
    }
  }

  .custom_title_input,
  .custom_distance_input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid ${themeLightGray};
  }

  .round_button {
    border: none;
    text-align: 'center';
    text-decoration: 'none';
    display: 'inline-block';
    color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 16px;
    border:1px solid ${themeLightGray};
    cursor: pointer;
    font-size: 0px;
  }

  .share_image{
    background-size: cover;
    background-position: center;
    position: relative;
    height: 0;
    padding-bottom: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    z-index: -1;

    .share_image__image {
      position: absolute;
      object-fit: cover;
      // object-position: center;
      z-index: -1;
      width: auto;
      min-width: 100%;
      min-height: 100%;
      display: block;
    }
  }

  .gradient {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: rgba(0,0,0,0.15);
    // background: -moz-linear-gradient(-45deg,  rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    // background: -webkit-linear-gradient(-45deg,  rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    // background: linear-gradient(135deg,  rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c2000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }

  div#hidden_monitor {
    background-size: cover;
    background-position: center;
    position: fixed;
    height: 650px;
    width: 650px;
    top: 9999px;
    overflow: hidden;
    left: 9999px;
    z-index: -1;
  }

  .file_input {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &::-webkit-file-upload-button{
      visibility: hidden;
    }
    
    &:before {
      content: '+';
      display: inline-block;
      width: 30px;
      height: 30px;
      background: ${themeColor};
      border-radius: 50%;
      cursor: pointer;
      font-family: "Quicksand",Orbitron,Helvetica,Arial,sans-serif;
      text-align: center;
      color: #fff;
      line-height: 1.3;
      font-size: 20px;
    }

    &__label {
      font-family: "Quicksand",Orbitron,Helvetica,Arial,sans-serif;
      padding-left: 4px;
      cursor: pointer;
    }
  }

  .input_wrapper {
    opacity: 0.1;
    filter: grayscale(100%);

    &--active {
      opacity: 1;
      filter: unset;
    }
  }

  input[type=range] {
    -webkit-appearance: none;
    margin: 18px auto;
    width: 90%;
  }

  // input[type=range]:disabled {
  //   opacity: 0.3;
  //   filter: grayscale(100%);
  // }

  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #ccc;
    border-radius: 1.3px;
    // border: 0.2px solid #010101;
  }
  input[type=range]::-webkit-slider-thumb {
    // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    // border: 1px solid #000000;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: ${themeColor};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: ${themeColor};
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: ${themeLightGray};
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type=range]::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type=range]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

export default GlobalStyle;
