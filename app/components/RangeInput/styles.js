import styled from 'styled-components';
import {
  themeColor,
  themeComplementaryColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';

const Div = styled.div`
  -webkit-appearance: none;
  margin: 18px auto;
  width: 90%;
  padding: 10px;
  opacity: 0.4;
  filter: grayscale(100%);

  &.input_wrapper--active {
    opacity: 1;
    filter: unset;
  }

  & .input_wrapper__label {
    text-align: center;
  }

  &:focus {
    outline: none;
  }

  .notice {
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &.hidden {
      display: none;
    }
  }

  input[type='range'] {
    -webkit-appearance: none;
    margin: 36px auto 18px;
    width: 90%;
  }

  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #ccc;
    border-radius: 1.3px;
    // border: 0.2px solid #010101;
  }
  input[type='range']::-webkit-slider-thumb {
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
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: ${themeColor};
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: ${themeLightGray};
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type='range']::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type='range']::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

export default Div;
