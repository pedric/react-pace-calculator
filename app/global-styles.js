import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Quicksand', Orbitron, Helvetica, Arial, sans-serif;
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
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .container {
    width: 100%;
    max-width: 660px;
    margin: 0 auto;
    padding: 5px;
  }

  select#races {
    width: 100%;
    padding: 6px;
    background: #ececec;
    border-radius: 4px;
    border: 1px solid #2296f3;
  }

  .input_wrapper {
    opacity: 0.2;
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
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #2196f3;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #367ebd;
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
