import React from "react";
import PropTypes from 'prop-types';


function AddButton({onClick, children}) {
  return (
    <button className="add-button" onClick={onClick}>
      {children}
    </button>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};


export default AddButton;
