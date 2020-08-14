import styled from 'styled-components';
import {
  themeColor,
  themeComplementaryColor,
  themeGray,
  themeLightGray,
  themeLight,
  themeDark,
} from 'settings/colors';

const Form = styled.form`
.unit_picker__radio-wrapper{
  // display: inline-block;
  // width: 50%;
  // width: 100%;
  // margin: 4px;
  display: block;
  width: 33%;
  margin: 8px auto;

  &--active {
    // background-color: ${themeLightGray};

    .unit_picker__label {
      color: ${themeColor};
      &:after {
        background: ${themeColor};
      }
    }
  }
}

.unit_picker__input {
  position: absolute;
  width: 0;
  height: 0;
  top: -9999px;
  left: -9999px;
}

.unit_picker__label {
  position: relative;
  display: block;
  padding: 4px 4px 4px 24px;
  cursor: pointer;
  &:hover {
    background: ${themeLightGray};
  }
  &:after {
    content: '';
    position: absolute;
    top: 6px;
    left: 2px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: ${themeLightGray};
  }
}
}`;

export default Form;
