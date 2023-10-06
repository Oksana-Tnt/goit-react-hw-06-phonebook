import React from 'react';

const IconButton = ({ onClick, ...allyProps }) => (
  <button
    className="btn btn-outline-success"
    onClick={onClick}
    {...allyProps}
  ></button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

export default IconButton;
