import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ bgColor }) => {
  const styles = {
    backgroundColor: bgColor,
    height: '100px',
    width: '100px'
  };

  return (
    <div style={styles}>
      {/* display color patch */}
    </div>
  );
};

Display.propTypes = {
  bgColor: PropTypes.string.isRequired
};

export default Display;
