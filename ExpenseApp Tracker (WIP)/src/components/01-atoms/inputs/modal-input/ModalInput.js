import React from "react";
import PropTypes from "prop-types";

function ModalInput({type, id, name, value, onChange, maxLength}) {
  return (
    <input
      className="modal-input"
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
}

ModalInput.propTypes = {
  type: PropTypes.oneOf(['text', 'data', 'number', 'color']),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
};

ModalInput.defaultProps = {
  maxLength: 10,
  type: 'text',
};

export default ModalInput;
