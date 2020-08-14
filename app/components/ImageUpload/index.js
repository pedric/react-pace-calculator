import React from 'react';
import Div from './styles';
export default function ImageUpload(props) {
  // const wrapperStyles = {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: '10px',
  // };
  return (
    <Div>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        onChange={props.handleChange}
        className={'file_input'}
      />
      <label htmlFor="image" className={'file_input__label'}>
        {props.status ? 'Change image' : 'Upload image'}
      </label>
    </Div>
  );
}
