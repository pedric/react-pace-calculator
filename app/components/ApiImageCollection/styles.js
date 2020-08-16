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
  overflow: hidden;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .image_picker__wrapper {
    position: relative;
    min-width: 30px;
    min-height: 30px;
    overflow: hidden;
    margin: 4px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:hover {
      transform: scale(1.2);
      z-index: 999;
    }

    .image_picker__image {
      position: absolute;
      object-fit: cover;
      min-width: 100%;
      min-height: 100%;
    }
  }
`;

export default Div;
