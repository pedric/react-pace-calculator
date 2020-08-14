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
  border: none;
  text-align: 'center';
  text-decoration: 'none';
  display: 'inline-block';
  color: transparent;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 16px;
  border: 1px solid ${themeLightGray};
  cursor: pointer;
  font-size: 0px;
`;

export default Button;
