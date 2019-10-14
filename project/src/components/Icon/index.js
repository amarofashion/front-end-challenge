import React from 'react';
import { string } from 'prop-types';
import { FiShoppingBag } from 'react-icons/fi';

const defaultProps = {
  color: '',
  size: '',
  className: '',
};

const propTypes = {
  name: string.isRequired,
  className: string,
  color: string,
  size: string,
};

export const iconsLibrary = {
  cart: FiShoppingBag,
};

function Icon({ name, color, size, className }) {
  const IconComponent = iconsLibrary[name];

  return (
    <IconComponent
      color={color}
      size={size}
      name={name}
      className={className}
    />
  );
}

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;

export default Icon;
