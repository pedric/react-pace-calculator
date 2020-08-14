import styled from 'styled-components';
import {
  themeColor,
  themeComplementaryColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${themeLight};
  border-bottom: 1px solid ${themeLightGray};

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    display: flex;

    li {
      flex-basis: 50%;
      max-width: 50%;
      text-align: center;

      a {
        background: ${themeLight};
        color: ${themeColor};
        text-align: center;
        padding: 15px 5px;
        width: 100%;
        line-height: 0;
        display: block;
        font-size: 12px;
        text-decoration: none;

        &.active {
          background: ${themeLightGray};
        }

        &:hover {
          background: ${themeLightGray};
        }
      }
    }
  }
`;

export default Header;
