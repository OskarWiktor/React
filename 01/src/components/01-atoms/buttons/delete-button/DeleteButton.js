import React from "react";
import PropTypes from 'prop-types';


function DeleteButton({onClick}) {
  return (
    <button className="delete-button" onClick={onClick}>
      <p className="delete-button--text">usuń</p>
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};


export default DeleteButton;
