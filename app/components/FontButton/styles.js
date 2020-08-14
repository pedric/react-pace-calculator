import styled from 'styled-components';
import {
  themeColor,
  themeComplementaryColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';

const Button = styled.button`
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
  `;

export default Button;
