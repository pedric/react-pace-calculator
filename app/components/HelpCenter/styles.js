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
    padding: 0 0 0 1px;
    margin: 0;
    font-size: 11px;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 16px;
    z-index: 999;

    border: none;
    text-align: 'center';
    text-decoration: 'none';
    display: 'inline-block';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${themeLightGray};
    cursor: pointer;
    transform: all 250ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    &:focus {
      outline: 2px dashed ${themeLightGray};
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
`;

export default Div;
