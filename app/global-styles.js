import { createGlobalStyle } from 'styled-components';

// const themeColor = '#ff00a3';
const themeColor = '#000';
const themeGray = '#ccc';
const lightGray = '#eeeeee';

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

  .visibility_hidden {
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
    top: -999px;
    left: -999px;
  }

  .theme_color {
    color: #ff00a3;
  }

  .theme_bg {
    background-color: #ff00a3;
  }

  .container {
    width: 100%;
    max-width: 660px;
    margin: 0 auto;
    padding: 5px;
    padding-top: 30px;
  }

  select#races {
    width: 100%;
    padding: 6px;
    background: #ececec;
    border-radius: 4px;
    border: 1px solid ${themeColor};
  }

  .unit_picker {
    .unit_picker__radio-wrapper{
      display: inline-block;
      width: 50%;

      &--active {
        background-color: ${lightGray};
    
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
        background: ${lightGray};
      }
    }
  }

  .custom_title_input,
  .custom_distance_input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid ${lightGray};
  }

  .color_picker {
    border: none;
    text-align: 'center';
    text-decoration: 'none';
    display: 'inline-block';
    color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 16px;
    border:1px solid ${lightGray};
    cursor: pointer;
    font-size: 0px;
  }

  .share_image{
    background-size: cover;
    background-position: center;
    position: relative;
    height: 0;
    padding-bottom: 100%;
    margin-bottom: 100px;
    overflow: hidden;

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

  div#hidden_monitor {
    background-size: cover;
    background-position: center;
    position: absolute;
    height: 650px;
    width: 650px;
    top: -9999px;
    overflow: hidden;
    left: -9999px;
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
    background: #ff00a3;
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
    background: #3071a9;
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
