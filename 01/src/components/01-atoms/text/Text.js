import React from 'react';
import PropTypes from 'prop-types';

function Text({ type, className, styles, children }) {
  const Tag = type;

  return (
    <Tag className={`${className} ${styles}`}>
      {children}
    </Tag>
  );
}

Text.propTypes = {
  type: PropTypes.oneOf(['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  styles: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  type: 'p',
  className: '',
  styles: '',
};

export default Text;
