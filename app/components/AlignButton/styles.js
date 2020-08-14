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
border: none;
background: none;
cursor: pointer;
transition: transform 250ms ease-in-out;

.align_menu__title {
  display: none;
  font-size: 14px;
}

&:focus {
  outline: 2px dashed ${themeLightGray};
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
  `;

export default Button;
