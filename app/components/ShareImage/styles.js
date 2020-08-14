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
  background-size: cover;
  background-position: center;
  position: relative;
  height: 0;
  padding-bottom: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  z-index: -1;

  &#hidden_monitor {
    background-size: cover;
    background-position: center;
    position: fixed;
    height: 650px;
    width: 650px;
    top: 9999px;
    overflow: hidden;
    left: 9999px;
    z-index: -1;
    padding: 0;
  }

  .color_filter {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

export default Div;
