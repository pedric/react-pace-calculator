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
  display: flex;
  alignitems: center;
  justifycontent: center;
  padding: 10px;
  transition: all 250ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  .file_input {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &::-webkit-file-upload-button {
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
      font-family: 'Quicksand', Orbitron, Helvetica, Arial, sans-serif;
      text-align: center;
      color: #fff;
      line-height: 1.3;
      font-size: 20px;
    }
  }

  .file_input__label {
    font-family: 'Quicksand', Orbitron, Helvetica, Arial, sans-serif;
    padding-left: 4px;
    cursor: pointer;
    line-height: 1.9em;
    margin: -1px 0 0 3px;
  }
`;

export default Div;
