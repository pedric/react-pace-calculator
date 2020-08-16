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
  background-color: ${themeColor};
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 12px;
    color: ${themeLight};
    font-weight: 400;
  }

  .helpcenter__button {
    background-color: ${themeLight};
    color: ${themeColor};
    padding: 5px 3px;
    margin: 0;
    font-size: 11px;
    // width: 16px;
    // height: 16px;
    line-height: 0.4;
    position: absolute;
    top: 8px;
    right: 16px;
    z-index: 999;
    border: none;
    text-align: 'center';
    text-decoration: 'none';
    display: 'inline-block';
    // width: 20px;
    // height: 20px;
    border-radius: 8px;
    border: 1px solid ${themeLightGray};
    cursor: pointer;
    transform: all 250ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    &:focus {
      outline: 2px dashed ${themeColor};
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

    span {
      font-family: 'Quicksand';
      font-weight: 100;
    }

    h2 {
      font-family: 'Roboto Mono';
      margin-bottom: 0;
    }

    a {
      color: ${themeLight};
      text-decoration: none;

      &:hover {
        color: ${themeLightGray};
        text-decoration: underline;
      }
    }

    p {
      margin-top: 8px;
      max-width: 400px;
    }
  }
`;

export default Div;
