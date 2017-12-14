import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  borderRadius: '50px',
  display: 'inline-block',
  margin: 0,
  overflow: 'hidden',
  padding: 0,
};

const Paper = ({ children, color, diameter, style: styleOverrides }) => (
  <div
    className="paper"
    style={{
      ...styles,
      backgroundColor: color,
      height: diameter,
      width: diameter,
      ...styleOverrides,
    }}
  >
    {children}
  </div>
);

Paper.propTypes = {
  color: PropTypes.string,
  diameter: PropTypes.number,
  style: PropTypes.object,
};

export default Paper;
