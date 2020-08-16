import React from 'react';
import Div from './styles';

export default function ApiImageCollection(props) {
  let counter = 0;
  const images = props.items.map(image => (
    <div key={`image_wrap_${counter++}`} className={'image_picker__wrapper'}>
      <img
        key={`image_${counter++}`}
        src={image.thumb}
        onClick={() => props.handleChange(image.regular)}
        className={'image_picker__image'}
      />
    </div>
  ));
  return (
    <Div>
      <p className={'image_picker__label'}>Or use one of the images below</p>
      <Div className={'image_picker__images-wrapper'}>{images}</Div>
    </Div>
  );
}
